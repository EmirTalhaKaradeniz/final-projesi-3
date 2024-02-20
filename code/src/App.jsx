import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	return (
	  <div className="App">
		<nav className="navbar">
		  <div className="logo">Konya Meram Belediyesi</div>
		  <ul className="nav-links">
			<li><a href="#">Anasayfa</a></li>
			<li><a href="#">Projeler</a></li>
			<li><a href="#">Hakkımızda</a></li>
			<li><a href="http://www.meram.bel.tr">İletişim</a></li>
		  </ul>
		</nav>
  
		<div className="container">
		  <h1>Özgün Proje Fikirleri</h1>
		  <p>Belediyemiz, Konya Meram bölgesinde çeşitli projeler gerçekleştirmektedir. Bu projelerle ilgili bilgilere aşağıdan ulaşabilirsiniz.</p>
		  <div className="project">
			<img src="https://th.bing.com/th/id/R.a3dd856ba457cb6d32501a885c36457c?rik=Z7UHVip2%2ftaSIg&riu=http%3a%2f%2fmika.com.tr%2fwp-content%2fuploads%2f2017%2f01%2fyenilenebilir-enerji-nedir.jpg&ehk=ci%2bO8zQjAzW6BKe4As8f78U3XQ1%2biviq%2fwtHM%2fK3aFc%3d&risl=&pid=ImgRaw&r=0" alt="Proje 1" />
			<h2>Yenilenebilir Enerji Kullanımı</h2>
			<p>Bu proje, Konya Meram Belediyesi'nin çevresel sürdürülebilirliği teşvik etme ve enerji ihtiyacını yenilenebilir kaynaklardan karşılama hedefiyle oluşturulmuştur. Amacımız, fosil yakıtların neden olduğu çevresel etkileri azaltarak kentsel yaşamı daha temiz ve sağlıklı bir hale getirmek, aynı zamanda enerji arzını güvence altına almak ve enerji maliyetlerini düşürmek için yenilenebilir enerji kaynaklarını etkin bir şekilde kullanmaktır. Bu proje ile Konya Meram Belediyesi, sürdürülebilir bir gelecek inşa etmek ve yerel topluluğun refahını artırmak için önemli bir adım atmaktadır.</p>
		  </div>
		</div>
	  </div>
	);
  }
  
  export default App;
