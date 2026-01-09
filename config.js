/* config.template.js - FILE TEMPLATE
   App Electron sẽ replace 
*/
const WEDDING_CONFIG = {
  groomName: "Quang Huy",
  brideName: "Thuý Quỳnh",

  weddingDate: "2026-01-24 08:00",
  location: "H4HV+W6M, Hồng An, Hưng Hà, Thái Bình",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/NGHUCNBNwid4UUUHA",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5238.03637955724!2d106.1430589!3d20.5798256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c26e83e2cc99%3A0xb35c4afb0bcc76e2!2zxJDhu4FuIFRoxrDhu6NuZyBLaHU!5e1!3m2!1svi!2s!4v1767951358395!5m2!1svi!2s",

  heroImage: "assets/hero.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/MKn7uXzH3uw",

  gallery: [
    { src: "assets/g1.jpg" },
    { src: "assets/g2.jpg" },
    { src: "assets/g3.jpg" },
    { src: "assets/g4.jpg" },
    { src: "assets/g5.jpg" },
    { src: "assets/g6.jpg" },
    { src: "assets/g7.jpg" },
    { src: "assets/g8.jpg" },
    { src: "assets/g9.jpg" },
    { src: "assets/g10.jpg" }
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Quang Huy",
      parents: "Bố: Trần Quang Kỳ<br>Mẹ: Nguyễn Thị Hồng Phượng",
      address: "Thôn Bắc Sơn, xã Lê Quý Đôn, Hưng Yên"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Thuý Quỳnh",
      parents: "Bố: Phạm Văn Thụ<br>Mẹ: Nguyễn Thị Mức",
      address: "TDP Mẽ, Thị trấn Hưng Nhân, Hưng Yên"
    }
  },

  qr: [
    {
      src: "assets/QR01.jpg",
      title: "TRAN QUANG HUY",
      info: "Xin chân thành cảm ơn",
    },
    {
      src: "assets/QR02.jpg",
      title: "PHAM THUY QUYNH",
      info: "Xin chân thành cảm ơn"
    }
  ]
};
