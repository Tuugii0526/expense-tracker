import { icons } from "../mockData";
export const prepareCategoryPercent = (data, categories) => {
  const idSet = new Set();
  const categoryPercentArray = [];
  const filteredData = data
    .map((d) => {
      if (!idSet.has(d.category_id)) {
        idSet.add(d.category_id);
        const foundCategory = categories.find(
          (category) => category.id == d.category_id
        );
        return {
          ...d,
          icon_color: foundCategory.icon_color,
        };
      }
      return null;
    }).filter((d) => d != null).sort((a,b)=>{
        if((a?.one_des || a?.two_des) < (b?.one_des || b?.two_des) )
        {
            return -1
        }
        if((a?.exp_des || a?.inc_des) > (b?.exp_des || b?.inc_des))
        {
            return 1
        }
        return 0
     })
  filteredData.forEach((d) => {
    const icon = icons.find((icon) => icon.name == d.name);
    categoryPercentArray.push(
      <tr key={d.category_id}>
        <td className="flex items-center">
          <div
            className="w-fit h-fit p-1 rounded-full"
            style={{
              backgroundColor: d.icon_color,
            }}
          >
            <div className="h-3 w-3 text-white">{icon.icon}</div>
          </div>
          <p className="text-[9px]">{d.one_des || d.two_des}</p>
        </td>
        <td>{d.one_type == "INC" ? `${d.one_sum}₮`  :`${d.two_sum || 0} ₮` }</td>
        <td>{d.one_type == "INC" ? `${d.one_per}%` : `${d.two_per|| 0}%`}</td>
        <td>{d.one_type == "EXP" ? `${d.one_sum}₮` : `${d.two_sum || 0}₮`}</td>
        <td>{d.one_type == "EXP" ? `${d.one_per}%` : `${d.two_per || 0}%`}</td>
      </tr>
    );
  });
  return categoryPercentArray
};
