import { sql } from "./actions";
export async function getCategoriesWithCount(userId){
  try {
    const categories=await sql `
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
    `
    return {
      success:true,
      categories:categories
    }
  } catch (error) {
    return {
      success:false,
    message:`${error}`
    }
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
export async function getRecordsAll(query,userId) {
  try {
    let records
    if(!query)
    {
       records = await sql`
      SELECT 
      r.id,
      r.user_id,
      r.name AS payee,
      r.amount ,
      r.transaction_type,
      r.description AS record_description,
      DATE_PART('YEAR', CURRENT_TIMESTAMP - r.created_at) AS year,
      DATE_PART('MONTH', CURRENT_TIMESTAMP - r.created_at) AS month,
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
             `
    }
   else {
    records = await sql`
    SELECT 
    r.id,
    r.user_id,
    r.name AS payee,
    r.amount ,
    r.transaction_type,
    r.description AS record_description,
    DATE_PART('YEAR', CURRENT_TIMESTAMP - r.created_at) AS year,
    DATE_PART('MONTH', CURRENT_TIMESTAMP - r.created_at) AS month,
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
export async function getFilterDates() {
  try {
    const oldRecordArray = await sql`
           SELECT
           DATE_PART('YEAR',CURRENT_TIMESTAMP-created_at) as year,
           DATE_PART('MONTH',CURRENT_TIMESTAMP-created_at) as month,
           DATE_PART('DAY',CURRENT_TIMESTAMP-created_at) as day
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
