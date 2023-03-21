import React from 'react'
import vg from "../assests/2.webp"
import {AiFillGoogleCircle,AiFillYoutube,AiFillAmazonCircle,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div class="home" id="home">
        <main>
            <h1>
                ReactProject
            </h1>
            <p>
                Solutions to all your problems.
            </p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci earum, sequi, ducimus eveniet ex voluptatem minus 
                numquam vero nulla maxime debitis porro vitae voluptates eligendi
                velit tenetur impedit esse necessitatibus?
            </p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who We Are?</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Excepturi odit sapiente similique commodi. Cupiditate dolores
                saepe maxime et at, officiis vitae labore minima id, dolore numquam
                eveniet quis voluptate, quidem culpa? Accusantium laboriosam aspernatur 
                nulla quos? Numquam reiciendis nobis ducimus ipsum vero ea quos, eius eos, 
                ut sequi laborum veniam voluptas accusamus harum nostrum, sint quis? Illo, ad 
               Repudiandae optio quam, harum debitis atque autem vel?</p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
            <div style={{animationDelay:"0.3s",}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
            </div>

            <div style={{animationDelay:"0.5s",}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
            </div>

            <div style={{animationDelay:"0.7s",}}>
            <AiFillInstagram/>
            <p>Instagram</p>
            </div>
            
            <div style={{animationDelay:"0.9s",}}>
            <AiFillYoutube/>
            <p>Youtube</p>
            </div>
        </article>
        </div>
    </div>
    </>
  )
}

export default Home
