// category_id: DataTypes.BIGINT,
// name: DataTypes.STRING,
// owner: DataTypes.STRING,
// logo_url: DataTypes.STRING,
// picture_url: DataTypes.STRING,
// coordinate: DataTypes.STRING,
// instagram_link: DataTypes.STRING,
// wa_link: DataTypes.STRING,
// map_link: DataTypes.STRING,
// facebook_link: DataTypes.STRING,
// twitter_link: DataTypes.STRING,
// content: DataTypes.TEXT,

function Dashboard() {
  return (
    <div className="bg-slate-200 w-full px-6 py-4 rounded-lg shadow-lg flex overflow-hidden max-h-[100%] h-full justify-end flex-wrap">
      <div className="w-full flex items-center mb-5">
        <h1 className="font-bold text-slate-900 text-xl">Tambah UMKM</h1>
      </div>
      <div className="w-full flex flex-wrap gap-5 h-full max-h-[80%] py-2 px-1 overflow-auto no-scrollbar">
        <div className="w-full flex items-center">
          <p className="w-1/4">Nama Usaha</p>
          <input type="text" placeholder="Type here" className="input w-3/4" />
        </div>
        <div className="w-full flex items-center">
          <p className="w-1/4">Kategori</p>
          <select class="select w-3/4">
            <option disabled selected>
              Pilih Kategori
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
        <div className="w-full flex items-center">
          <p className="w-1/4">Nama Pemilik</p>
          <input type="text" placeholder="Type here" className="input w-3/4" />
        </div>
        <div className="w-full flex items-center">
          <p className="w-1/4">Foto Usaha</p>
          <input type="file" className="file-input w-3/4" />
        </div>
        <div className="w-full flex items-center">
          <p className="w-1/4">Foto Pemilik</p>
          <input type="file" className="file-input w-3/4" />
        </div>
        <div className="w-full flex items-center">
          <p className="w-1/4">Koordinat</p>
          <input type="text" placeholder="Type here" className="input w-3/4" />
        </div>
        <div className="w-full flex items-center">
          <p className="w-1/4">Link Instagram</p>
          <input type="text" placeholder="Type here" className="input w-3/4" />
        </div>
        <div className="w-full flex items-center">
          <p className="w-1/4">Link WA</p>
          <input type="text" placeholder="Type here" className="input w-3/4" />
        </div>
        <div className="w-full flex items-center">
          <p className="w-1/4">Link Google Map</p>
          <input type="text" placeholder="Type here" className="input w-3/4" />
        </div>
        <div className="w-full flex items-center">
          <p className="w-1/4">Link Facebook</p>
          <input type="text" placeholder="Type here" className="input w-3/4" />
        </div>
        <div className="w-full flex items-center">
          <p className="w-1/4">Link Twitter</p>
          <input type="text" placeholder="Type here" className="input w-3/4" />
        </div>
      </div>
      <button className="btn rounded-lg justify-self-end">Tambah</button>
    </div>
  );
}

export default Dashboard;
