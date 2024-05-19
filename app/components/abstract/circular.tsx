export default function Circular({ className }: { className: string }) {
  return (
    <div
      className={
        "flex justify-center items-center w-[600px] h-[600px] border border-gray-300 border-dashed absolute rounded-full  " +
        className
      }
    >
      <div
        className={
          "flex justify-center items-center w-[400px] h-[400px] border border-gray-300 border-dashed rounded-full  " +
          className
        }
      >
        <div
          className={
            "flex justify-center items-center w-[200px] h-[200px] border border-gray-300 border-dashed rounded-full  " +
            className
          }
        ></div>
      </div>
    </div>
  );
}
