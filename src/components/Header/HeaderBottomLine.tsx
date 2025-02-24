export const HeaderBottomLine = () => {
  return (
    <div className="flex flex-row absolute right-0 top-16 left-0 z-50">
      <div className="h-[1px] bg-slate-400 w-8 xl:w-16 skew-y-[40deg] xl:skew-y-[20deg] origin-top-left mt-[-8px] xl:mt-[-6px]" />
      <div className="h-[1px] bg-slate-400 w-full mt-4" />
      <div className="h-[1px] bg-slate-400 w-8 xl:w-16 skew-y-[40deg] xl:skew-y-[20deg]  origin-top-right mt-[40px] xl:mt-[37px]" />
    </div>
  );
};
