interface Props {
  title: string
  description: string
}

export const CardItem = ({ title, description }: Props) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className=" text-lg md:text-xl font-semibold text-gray-700">
        {title}
      </h2>
      <p className="text-gray-500 text-xs md:text-lg">{description}</p>
    </div>
  )
}
