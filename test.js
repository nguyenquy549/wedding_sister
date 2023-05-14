const create_gallery = async (number32, number23) => {
  let html_gallery23 = ""
  for (let i = 1; i < 93; i++) {
    html_gallery23 += `
        <div class="gallery-item">
          <img class="img-fluid w-100" src="img/3-2/gallery32 (${i}).jpg" alt="" />
          <a href="img/3-2/gallery32 (${i}).jpg" data-lightbox="gallery">
            <i class="fa fa-2x fa-plus text-white"></i>
          </a>
        </div>`
  }

  console.log(html_gallery23)
}

create_gallery(10, 10);