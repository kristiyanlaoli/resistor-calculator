let Resistor = () => {
  return (
    <div className="bg-slate-400 mx-0">
      <div className="bg-slate-200 py-4 mx-0 lg:mx-24">
        <div className="bg-orange-200 rounded-2xl h-[70px] w-[260px] mx-auto relative">
          <div className="bg-red-500 h-[70px] w-[20px] left-[20px] absolute"></div>
          <div className="bg-red-500 h-[70px] w-[20px] left-[60px] absolute"></div>
          <div className="bg-red-500 h-[70px] w-[20px] left-[100px] absolute"></div>
          <div className="bg-red-500 h-[70px] w-[20px] left-[140px] absolute"></div>
          <div className="bg-red-500 h-[70px] w-[20px] left-[220px] absolute"></div>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="bg-slate-300 p-2 w-[100px]">
            <p>Band 1</p>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-1"
                className="w-4 h-4 text-slate-950 bg-gray-100 border-gray-300 focus:ring-slate-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-black w-full pl-1"
              >
                Black
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-1"
                className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-900 w-full pl-1"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-1"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-red-600 w-full pl-1"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-1"
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-orange-500 w-full pl-1"
              >
                Orange
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-1"
                className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-300 w-full pl-1"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-1"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-green-600 w-full pl-1"
              >
                Green
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-1"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-20"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-blue-600 w-full pl-1"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-1"
                className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 focus:ring-fuchsia-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-fuchsia-600 w-full pl-1"
              >
                Violet
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-1"
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-gray-600 w-full pl-1"
              >
                Gray
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-1"
                className="w-4 h-4 text-neutral-50 bg-gray-100 border-gray-300 focus:ring-neutral-50  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-neutral-50 w-full pl-1"
              >
                White
              </label>
            </div>
          </div>
          <div className="bg-slate-300 p-2 w-[100px]">
            <p>Band 2</p>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-2"
                className="w-4 h-4 text-slate-950 bg-gray-100 border-gray-300 focus:ring-slate-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-black w-full pl-1"
              >
                Black
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-2"
                className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-900 w-full pl-1"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-2"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-red-600 w-full pl-1"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-2"
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-orange-500 w-full pl-1"
              >
                Orange
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-2"
                className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-300 w-full pl-1"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-2"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-green-600 w-full pl-1"
              >
                Green
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-2"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-20"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-blue-600 w-full pl-1"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-2"
                className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 focus:ring-fuchsia-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-fuchsia-600 w-full pl-1"
              >
                Violet
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-2"
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-gray-600 w-full pl-1"
              >
                Gray
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-2"
                className="w-4 h-4 text-neutral-50 bg-gray-100 border-gray-300 focus:ring-neutral-50  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-neutral-50 w-full pl-1"
              >
                White
              </label>
            </div>
          </div>
          <div className="bg-slate-300 p-2 w-[100px]">
            <p>Band 3</p>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-3"
                className="w-4 h-4 text-slate-950 bg-gray-100 border-gray-300 focus:ring-slate-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-black w-full pl-1"
              >
                Black
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-3"
                className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-900 w-full pl-1"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-3"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-red-600 w-full pl-1"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-3"
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-orange-500 w-full pl-1"
              >
                Orange
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-3"
                className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-300 w-full pl-1"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-3"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-green-600 w-full pl-1"
              >
                Green
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-3"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-20"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-blue-600 w-full pl-1"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-3"
                className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 focus:ring-fuchsia-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-fuchsia-600 w-full pl-1"
              >
                Violet
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-3"
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-gray-600 w-full pl-1"
              >
                Gray
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-3"
                className="w-4 h-4 text-neutral-50 bg-gray-100 border-gray-300 focus:ring-neutral-50  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-neutral-50 w-full pl-1"
              >
                White
              </label>
            </div>
          </div>
          <div className="bg-slate-300 p-2 w-[100px]">
            <p>Band 4</p>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-4"
                className="w-4 h-4 text-slate-950 bg-gray-100 border-gray-300 focus:ring-slate-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-black w-full pl-1"
              >
                Black
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-4"
                className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-900 w-full pl-1"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-4"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-red-600 w-full pl-1"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-4"
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-orange-500 w-full pl-1"
              >
                Orange
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-4"
                className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-300 w-full pl-1"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-4"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-green-600 w-full pl-1"
              >
                Green
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-4"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-20"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-blue-600 w-full pl-1"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-4"
                className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 focus:ring-fuchsia-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-fuchsia-600 w-full pl-1"
              >
                Violet
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-4"
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-gray-600 w-full pl-1"
              >
                Gray
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-4"
                className="w-4 h-4 text-neutral-50 bg-gray-100 border-gray-300 focus:ring-neutral-50  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-neutral-50 w-full pl-1"
              >
                White
              </label>
            </div>
          </div>
          <div className="bg-slate-300 p-2 w-[100px]">
            <p>Band 5</p>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-5"
                className="w-4 h-4 text-slate-950 bg-gray-100 border-gray-300 focus:ring-slate-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-black w-full pl-1"
              >
                Black
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-5"
                className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-900  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-900 w-full pl-1"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-5"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-red-600 w-full pl-1"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-5"
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-orange-500 w-full pl-1"
              >
                Orange
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-5"
                className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-yellow-300 w-full pl-1"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-5"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-green-600 w-full pl-1"
              >
                Green
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-5"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-20"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-blue-600 w-full pl-1"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-5"
                className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 focus:ring-fuchsia-600 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-fuchsia-600 w-full pl-1"
              >
                Violet
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-5"
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-50 bg-gray-600 w-full pl-1"
              >
                Gray
              </label>
            </div>
            <div className="flex items-center mb-1">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="band-5"
                className="w-4 h-4 text-neutral-50 bg-gray-100 border-gray-100 focus:ring-neutral-500  focus:ring-2"
              ></input>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 bg-neutral-50 w-full pl-1"
              >
                White
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resistor;
