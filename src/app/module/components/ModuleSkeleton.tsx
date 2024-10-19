export const ModuleSkeleton = () => {
  const limitSkeletons = Array.from({ length: 6 }, (_, i) => i + 1)

  return limitSkeletons.map((index) => (
    <div
      key={index}
      className="animate-pulse bg-white p-4 rounded-md shadow-md flex justify-between items-center"
    >
      <div className="w-full space-y-2">
        <h1 className="text-lg font-bold text-gray-700 h-6 bg-gray-200 rounded-md max-w-52"></h1>
        <p className="h-6 bg-gray-200 rounded-md max-w-28"></p>
      </div>
      <div className="flex gap-2">
        <div className="size-10 bg-gray-200 rounded-full"></div>
        <div className="size-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  ))
}
