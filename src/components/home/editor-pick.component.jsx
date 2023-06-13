/* eslint-disable react/no-unescaped-entities */

const EditorPick = () => {
  return (
    <div className="w-screen">
        <div className="w-full max-w-6xl m-auto py-8 mb-5">
            <h2 className="text-2xl font-bold mb-2">Editor's picks</h2>
            <div className="grid gap-10 grid-cols-3 grid-rows-1">
                <div className="text-start border-[1px] border-gray-300 rounded">
                    <img src="/martini.png" alt="" className="rounded-t" />
                    <div className="p-3">
                        <h3 className="text-lg font-bold">Martini Glasses (x8)</h3>
                        <h4 className="font-bold">$10</h4>
                        <h5 className="text-gray-500">Bob Ni</h5>
                        <p className="text-gray-500">8 Martini Glasses for your next 007-themed party</p>
                    </div>
                </div>
                <div className="text-start border-[1px] border-gray-300  rounded">
                    <img src="/plant.png" alt="" className="rounded-t" />
                    <div className="p-3">
                        <h3 className="text-lg font-bold">Fake Hanging Plant</h3>
                        <h4 className="font-bold">$5</h4>
                        <h5 className="text-gray-500">Sandeep Shah</h5>
                        <p className="text-gray-500"></p>
                    </div>
                </div>
                <div className="text-start border-[1px] border-gray-300  rounded">
                    <img src="/bar.png" alt="" className="rounded-t" />
                    <div className="p-3">
                        <h3 className="text-lg font-bold">Bar Cart</h3>
                        <h4 className="font-bold">$50</h4>
                        <h5 className="text-gray-500">Sandeep Shah</h5>
                        <p className="text-gray-500"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditorPick