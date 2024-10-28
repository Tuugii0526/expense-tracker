import { icons } from "./mockData";
export const prepareCategoriesForSelect = (categories) => {
  if (!categories.length) {
    return [];
  }
  const jsxContainingCategories= categories.map((category) => {
   const icon=icons.find(icon=>icon.name==category.name)
   if(!icon)
   {
        return null
   }
   return {
    label : (
        <div className="flex gap-2">
        <div style={{
            color:category.icon_color
        }}>
        {
            icon.icon  
        }
        </div>
        {
            category.description
        }
        </div>
    ),
    value: category.id
   }
  });
  return jsxContainingCategories.filter(el=>el!==null)
};
