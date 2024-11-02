import { sql } from "./actions";
export async function getCategoriesWithCount(userId) {
  try {
    const categories = await sql`
      SELECT 
  c.user_id,
  c.description,
  c.id,
  COUNT (r.category_id)
  FROM categories c
  LEFT JOIN records r ON c.id=r.category_id
  WHERE c.user_id=${userId}
  GROUP BY c.id
  ORDER BY count DESC
    `;
    return {
      success: true,
      categories: categories,
    };
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
    };
  }
}
export async function getCategories(userId) {
  try {
    const categories = await sql`
        SELECT *
        FROM categories
        WHERE 
          user_id=${userId}
        `;
    return {
      success: true,
      categories: categories,
    };
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
    };
  }
}
export async function getRecordsAll(query, userId) {
  try {
    let records;
    if (!query) {
      records = await sql`
      SELECT 
      r.id,
      r.user_id,
      r.name AS payee,
      r.amount ,
      r.transaction_type,
      r.description AS record_description,
      DATE_PART('DAY', CURRENT_TIMESTAMP - r.created_at) AS day,
      CASE 
        WHEN (CURRENT_DATE - r.created_at::date) < 1 THEN 'today'
          WHEN (CURRENT_DATE - r.created_at::date) < 2 THEN 'yesterday'
            ELSE r.created_at::DATE::TEXT
            END AS time_category,
        TO_CHAR(r.created_at,
              'HH24:MI') AS created_hour_minute,
      r.category_id,
      c.name category_name,
      c.description category_description,
      c.icon_color
            FROM records r
            INNER JOIN categories c
            ON r.category_id=c.id
      WHERE
        r.user_id=${userId}
     ORDER BY r.created_at DESC
             `;
    } else {
      records = await sql`
    SELECT 
    r.id,
    r.user_id,
    r.name AS payee,
    r.amount ,
    r.transaction_type,
    r.description AS record_description,
    DATE_PART('DAY', CURRENT_TIMESTAMP - r.created_at) AS day,
    CASE 
      WHEN (CURRENT_DATE - r.created_at::date) < 1 THEN 'today'
        WHEN (CURRENT_DATE - r.created_at::date) < 2 THEN 'yesterday'
          ELSE r.created_at::DATE::TEXT
          END AS time_category,
      TO_CHAR(r.created_at,
            'HH24:MI') AS created_hour_minute,
    r.category_id,
    c.name category_name,
    c.description category_description,
    c.icon_color
          FROM records r
          INNER JOIN categories c
          ON r.category_id=c.id
          WHERE 
            r.user_id=${userId} AND 
            (
            r.name ILIKE ${`%${query}%`} OR
            r.amount::text ILIKE ${`%${query}%`} OR 
            r.created_at::date::text ILIKE ${`%${query}%`} OR
            r.description ILIKE ${`%${query}%`} OR
            c.description ILIKE ${`%${query}%`}
            )
     ORDER BY r.created_at DESC
    `;
    }

    return {
      success: true,
      records: records,
    };
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
    };
  }
}
export async function getTotalThisMonth(userId) {
  try {
    const thisMonth = await sql`
    SELECT 
      transaction_type,
      SUM(amount::BIGINT)
    FROM 
      records
    WHERE 
      date_trunc('MONTH',CURRENT_TIMESTAMP) < created_at AND created_at < date_trunc('MONTH',CURRENT_TIMESTAMP+INTERVAL'1 month' )
      AND user_id=${userId}
    GROUP BY 
      transaction_type
    ORDER BY transaction_type
    `;
    return {
      success: true,
      data: thisMonth,
    };
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
    };
  }
}
export async function getTotalPreviousMonth(userId) {
  try {
    const lastMonth = await sql`
  SELECT 
    transaction_type ,
    SUM(amount::BIGINT)
  FROM 
    records
  WHERE 
    date_trunc('month',CURRENT_TIMESTAMP)-INTERVAL'1 month' < created_at AND created_at < date_trunc('month',CURRENT_TIMESTAMP)
    AND user_id=${userId}
  GROUP BY 
    transaction_type
  ORDER BY transaction_type
  `;
    return {
      success: true,
      data: lastMonth,
    };
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
    };
  }
}

export async function getFilterDates() {
  try {
    const oldRecordArray = await sql`
           SELECT
            EXTRACT(YEAR FROM AGE(CURRENT_TIMESTAMP,created_at)) as year
           FROM records
            WHERE id=(
                 SELECT id
                FROM records
                ORDER BY created_at
                LIMIT 1
                );
 `;
    if (!oldRecordArray.length) {
      return {
        success: false,
        message: "Failed",
      };
    }

    return {
      success: true,
      data: oldRecordArray[0],
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed at getting different date :${error}`,
    };
  }
}
export async function getBarChartData(userId) {
  try {
    const data = await sql`
      WITH inc AS (
 SELECT  transaction_type inc_type, EXTRACT(MONTH FROM created_at) AS inc_month, SUM(amount::BIGINT) AS inc_total
 FROM records
 WHERE (CURRENT_TIMESTAMP-INTERVAL'7 month' < created_at) AND (EXTRACT(YEAR FROM CURRENT_TIMESTAMP)=EXTRACT(YEAR FROM created_at)) AND transaction_type='INC' AND user_id=${userId}
 GROUP BY inc_month, inc_type
ORDER BY inc_month
 ),
 exp AS (
 SELECT  transaction_type exp_type, EXTRACT(MONTH FROM created_at) AS exp_month, SUM(amount::BIGINT) AS exp_total
 FROM records
 WHERE (CURRENT_TIMESTAMP-INTERVAL'7 month' < created_at) AND (EXTRACT(YEAR FROM CURRENT_TIMESTAMP)=EXTRACT(YEAR FROM created_at)) AND transaction_type='EXP' AND user_id=${userId}
 GROUP BY exp_month, exp_type
ORDER BY exp_month
 )
SELECT 
* 
FROM 
inc 
RIGHT JOIN exp
ON inc.inc_month=exp.exp_month
UNION 
SELECT 
* 
FROM 
inc 
LEFT JOIN exp
ON inc.inc_month=exp.exp_month
  `;
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
    };
  }
}
export async function getPieChartData(userId) {
  try {
    const data = await sql` 
WITH exp  AS (
SELECT 
c.id category_id,
r.transaction_type  ,
c.description des,
SUM( amount) sum
FROM categories  c
INNER JOIN records r
ON c.id=r.category_id
WHERE r.user_id=${userId} AND (CURRENT_TIMESTAMP-INTERVAL'7 month' < r.created_at ) AND r.transaction_type='EXP' 
GROUP BY r.transaction_type ,c.description ,c.id  ),
 inc  AS (
SELECT 
c.id category_id,
r.transaction_type  ,
c.description des,
SUM( amount) sum
FROM categories  c
INNER JOIN records r
ON c.id=r.category_id
WHERE r.user_id=${userId} AND (CURRENT_TIMESTAMP-INTERVAL'7 month' < r.created_at ) AND r.transaction_type='INC' 
GROUP BY r.transaction_type ,c.description ,c.id  )

SELECT 
exp.category_id exp_category_id,
inc.category_id inc_category_id,
exp.des exp_des,
inc.des  inc_des,
inc.sum inc_sum,
exp.sum exp_sum
FROM inc
LEFT JOIN exp
ON inc.category_id=exp.category_id
UNION
SELECT
exp.category_id exp_category_id,
inc.category_id inc_category_id,
 exp.des exp_des,
 inc.des inc_des, 
 inc.sum inc_sum,
exp.sum exp_sum 
FROM inc
RIGHT JOIN exp
ON inc.category_id=exp.category_id;
    `;
    const categories = await sql `
    SELECT 
id,
icon_color
FROM categories 
WHERE user_id=${userId};
    `
    return {
      success:true,
      data:data,
      categories:categories
    }
  } catch (error) {
    return {
      success:false,
      message:`${error}`
    }
  }
}
export async function getPieChartCategoryPercent(userId){
  try {
     const categoryPercent= await sql `

     WITH exp  AS (
      SELECT 
      c.description,
      c.name,
      c.id category_id,
      r.transaction_type  ,
      c.description des,
      SUM( amount) sum
      FROM categories  c
      INNER JOIN records r
      ON c.id=r.category_id
      WHERE (CURRENT_TIMESTAMP-INTERVAL'7 month' < r.created_at and r.user_id=${userId}) 
      GROUP BY r.transaction_type ,c.description ,c.id  )
      
      
      SELECT
      one.category_id,
      one.name,
      one.description one_des,
      one.transaction_type one_type,
      one.sum one_sum,
      ROUND(one.sum::NUMERIC/SUM(one.sum::NUMERIC) OVER(PARTITION BY one.transaction_type)*100,4) one_per,
      two.description two_des,
      two.transaction_type two_type,
      two.sum two_sum,
      ROUND(two.sum::NUMERIC/SUM(two.sum::NUMERIC) OVER(PARTITION BY two.transaction_type)*100,4) two_per
      FROM exp one
      LEFT JOIN exp two
      ON one.category_id=two.category_id AND  one.transaction_type<>two.transaction_type;
     `
     return {
      success:true,
      data:categoryPercent
     }
  } catch (error) {
    return {
      success:false,
      message:`${error}`
    }
  }
}
export async function getLastRecords(userId){
  try {
    const data= await sql`
SELECT 
EXTRACT(YEAR FROM AGE(CURRENT_TIMESTAMP+INTERVAL'8 hour',r.created_at)) AS year,
EXTRACT(MONTH FROM AGE(CURRENT_TIMESTAMP+INTERVAL'8 hour',r.created_at)) AS month,
EXTRACT(DAY FROM AGE(CURRENT_TIMESTAMP+INTERVAL'8 hour',r.created_at)) AS day,
EXTRACT(HOUR FROM AGE(CURRENT_TIMESTAMP+INTERVAL'8 hour',r.created_at)) AS hour,
EXTRACT(MINUTE FROM AGE(CURRENT_TIMESTAMP+INTERVAL'8 hour',r.created_at)) AS minute,
EXTRACT(SECOND FROM AGE(CURRENT_TIMESTAMP+INTERVAL'8 hour',r.created_at))::INT AS second,
r.transaction_type,
r.amount,
r.id,
c.icon_color,
c.name category_name,
c.description
FROM records r
INNER JOIN categories c ON r.category_id=c.id
WHERE r.created_at<CURRENT_TIMESTAMP+INTERVAL'8 hour' AND r.user_id=${userId}
ORDER BY r.created_at DESC
LIMIT 10`
console.log('last records are:',data)
return {
  success:true,
  data:data
}
  } catch (error) {
    return {
      success:false,
      message:`${error}`
    }
  }
}