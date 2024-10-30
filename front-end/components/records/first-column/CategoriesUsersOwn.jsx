


import { OneCategory } from "../category/OneCategory";
export const CategoriesUsersOwn = ({categories}) => {
  return (
    <div className="flex flex-col gap-2">
      {
        categories?.length 
        ? categories.map((category) => (
            <OneCategory key={category.id} c={category} />
          ))
        : <p >No category . You can add category .✨</p>
      }
    </div>
  );
};
