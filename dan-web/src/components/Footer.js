

export default function Footer (){
    return(
        <div>
             <footer class="footer">
      <div class="container">
        <a href="#hero" class="back-to-top" aria-label="go back to top">
          <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div class="social-links">
         
          <a
            href="https://www.instagram.com/barnhardtfarm/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/barnhardt.farm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
        </div>
        <hr />
        <p class="footer__text">
          &copy; <span id="year"></span> - Template by
          <a
            href="https://github.com/AnilSeervi"
            target="_blank"
            rel="noopener noreferrer"
            >Anil Seervi</a
          >. <br />Made with &hearts;
        </p>
      </div>
    </footer>


        </div>
    )
}