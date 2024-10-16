interface Props {
  active: boolean
}

export const Modal = ({ active }: Props) => {
  console.log({ active })

  if (!active) return null

  return (
    <div className="absolute bg-black/35 top-0 left-0 h-screen">
      <div className="h-full flex justify-center items-center">
        <section className="bg-white w-96">
          <p className=" p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea rerum,
            voluptate illo excepturi voluptatum ipsum consequatur mollitia at
            explicabo expedita. Accusamus commodi hic ullam voluptatibus numquam
            dignissimos officiis voluptatem similique.
          </p>
        </section>
      </div>
    </div>
  )
}
