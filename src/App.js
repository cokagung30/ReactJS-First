import React from 'react';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
        <FotoProduk />
        <ProdukInfo category="KOPI" price={15000} name="Coffee Allabasta" isDiskon="yes" />
        <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return(
    <div className="Foto">
      <img src="kopi.jpg"/>
    </div>
  );
}

function CheckDiskon(props) {
  const { isDiskon, discount } = props;
  if (isDiskon == "yes") {
    return (
      <p>Diskon {discount}% Off</p>
    );
  } else if(isDiskon == "coming") {
    return (
      <p>Akan ada diskon</p>
    );
  } else {
    return (
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, name, isDiskon, price } = props;  
  const sweetLevels = ["Manis", "Sedang", "Tidak Manas"];
  const listSweetLevel = sweetLevels.map((itemSweet) => 
    <li key={itemSweet}>{itemSweet}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {new Intl.NumberFormat('en-IN', {maximumFractionDigits: 3 }).format(price)}</p>
        <CheckDiskon isDiskon={isDiskon} discount={50} />
        <p className="Info">
            Salah satu menu kopi terbaik yang terbuat dari kopi robusta pilihan
            dan ditambah creamer yang membuat para penikmat kopi ini terpikat,
            rasa yang khas dan aromanya yang kuat membuat kopi ini menjadi rebutan banyak pelanggan.
        </p>
        <ul>
          {listSweetLevel}
        </ul>
        <a href="#" onClick={(e) => TambahOrder(props, e)}>Order Item</a>
      </div>
    </div>
  );
}

function TambahOrder(e) {
  const {name, category} = e;
  return console.log(`Memesan Item ${name} kategori : ${category}`);
}

CheckDiskon.prototype = {
  discount: PropTypes.number.isRequired
};

export default App;
