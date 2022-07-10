import React from 'react'
import './Homepage.css';
import MovieProduct from './MovieProduct';
import Footer from './Footer';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import {Link} from 'react-router-dom';

function Homepage() {

  const [{user}] = useStateValue();

  const login = ()=>{
    if(user){
        auth.signOut();
    }
  }

  return (
    <>
    <div className="navbar">
        <img src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" alt="" className="homepage_logo" />
        <h2 className='_homepage_navbar1'><Link to='/' className='link_to_home'>Home</Link></h2>
        <h2 className='_homepage_navbar2'>Hi,{user? user.email: ' '} </h2>
    </div>
    <div className='homepage_product'>
      <h2 className="movies_title">Movies</h2>
      <p className="movies_para1">Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>

      <div className="row_1_title">
        Popular On Netflix
      </div>

      <div className="container_movie_row1">
        <MovieProduct
        id="#11"
        title="MAJOR (Telugu)"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTkS70cLuOuEnvDoVK2MpphtYi9w-XrE6hYvMsTSmTqN16lDCDQJIv6lVR0Ztuy_nFaiNyVgsGO3-6faJmC95G_ZkxYhmORzvY8.jpg?r=adb"
        rating={7.8}
        link="https://www.netflix.com/in/title/81242575"
        />
        <MovieProduct
        id="#12"
        title="MAJOR (Hindi)"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVfyaByxoiPajIxSXwS9pfjlaaXLf13g2EoJnX4NkUrOsUNCju4YDPb_CChTbdS-dX8SGRQt9qnJrVvUjIt1BZtcpZ6MJOuOBa8.jpg?r=76c"
        rating={7.7}
        link="https://www.netflix.com/in/title/81242574"
        />
        <MovieProduct
        id="#13"
        title="BHOOL BHULAIYAA 2"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVm1My5tE1Gb0cYBSzBxKTeszJgidA_x8CfQDgHbfkZ-r86fm_c3QpZcGj00gHQD3cqc5wJ79Sk_DnCGCTPENL__9FfPRRMGDVA.jpg?r=2af"
        rating={7.5}
        link="https://www.netflix.com/in/title/81243747"
        />
        <MovieProduct
        id="#14"
        title="DON"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcwo3ROJZL74qZ3t_NwxzGtVFIj0u5SZ-a3jn704UyAHX4wuiIfDEMyq18-acBEyeMlJ4uK7T7GFUdWvwOA1oQBP6vY1ROoi-Ws.jpg?r=78e"
        rating={6.8}
        link="https://www.netflix.com/in/title/81588444"
        />
      </div>

      <div className="row_2_title">
        ACTION MOVIES
      </div>

      <div className="container_movie_row2">
        <MovieProduct
        id="#21"
        title="RRR (Hindi)"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXppa5Rd7iEmailiXRPfJ4NoN1KRl00j7vJvThuXwBrtitsY1RluirlwBOLq-bS90vah2_QkYIOXbo5N3qs15JT-dqJZM5fGjUI.jpg?r=7ac"
        rating={7.8}
        link="https://www.netflix.com/in/title/81476453"
        />
        <MovieProduct
        id="#22"
        title="RAW (Hindi)"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSz3AT71P574jeA2d9diBEzjZkHRi9dxhK_BUjycnoOmgAiKy6Qa3K8eNSKhKfd5A8elbpzfu1JgAFjbOaUZXiuAT9GKd-dAisM.jpg?r=b8a"
        rating={7.7}
        link="https://www.netflix.com/in/title/81508719"
        />
        <MovieProduct
        id="#23"
        title="ANEK"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQyocn4JVSwLtUYx1TbLLDJwWwGr0a-dzua64-4YmlP34Xe362H7ppGF8DN-hAI0ZG1HxeC6UImhCwG9ZDNcgMBJEfyxksPknvk.jpg?r=4d3"
        rating={7.5}
        link="https://www.netflix.com/in/title/81351700"
        />
        <MovieProduct
        id="#24"
        title="SOORYAVANSHI"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTCr_tdXvXDSAAY6VY_N_Vaw0sF4R9WN5VzeNccaOw2J2Noa9mchq25_l1fR3NNk85H5kLhoCYBcCZ4Sd8jPirnwRjeYonKEZkY.jpg?r=947"
        rating={6.8}
        link="https://www.netflix.com/in/title/81144150"
        />
      </div>

      <div className="row_3_title">
        COMEDIES
      </div>

      <div className="container_movie_row3">
        <MovieProduct
        id="#31"
        title="SONIC: THE HEDGEHOG"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYKWbKvNUaOuF2qicXHmZ-RG_2UxpiqmHGCJXisUMztma4QfC-cDLx1UTt_WDfB_EJHmwI8QEbUZH15ryGdNwwwmcnGqH7IiKfE.jpg?r=c82"
        rating={7.8}
        link="https://www.netflix.com/in/title/80217006"
        />
        <MovieProduct
        id="#32"
        title="DASVI"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfrU0TNGHJQG9ViyIvdq-X41gdT6qsAVv61Vr9SrQzyg_UvSkIqTBc7Zr_S_Y-mZNUxJby_SWOHzJFtNmup4-0yk1wllhyHD-Ko.jpg?r=86a"
        rating={7.7}
        link="https://www.netflix.com/in/title/81332225"
        />
        <MovieProduct
        id="#33"
        title="BADHAAI DO"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcPL5lWJ7gkMn8wIFHaRf4I1c5wnfs5QHdycOpwRHpDywk_DcQtmDY-ArCPq_KttRgbOETm41ZTgIqOlA7JPWLJF8MX7z1Cdx-c.jpg?r=947"
        rating={7.5}
        link="https://www.netflix.com/in/title/81350338"
        />
        <MovieProduct
        id="#34"
        title="THE ANGRY BIRDS MOVIE 2"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsHdtnIX3-BNSPUnxLrkc-tZ3wz_A4AvRS5-QfvDkN79_8iRJhBSksHUBB7176aI-iEnji9-LMN_3NfJODTRD1jkxx4zU_bBos.jpg?r=17f"
        rating={6.8}
        link="https://www.netflix.com/in/title/81073593"
        />
      </div>
      
      <div className="row_4_title">
        HORROR MOVIES
      </div>


      <div className="container_movie_row4">
        <MovieProduct
        id="#41"
        title="THE CONJURING"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVMvHETkwb5OpQK4XblzgAfkP6xH7lIjwBV-Hhh6_mISera2qNRXBrz_8u6WXQN7MB6-oes3aUDDikRbBEBVwjugZIZDWeohSKo.jpg?r=ac9"
        rating={7.8}
        link="https://www.netflix.com/in/title/70251894"
        />
        <MovieProduct
        id="#42"
        title="#ALIVE"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd4qqaGop0tcgh0fHZHlEorCLfPY7sMVjkC0FC95bZdZBKIfmDJkGYW6q-Cu9kTIOzABPRew33INrYUkvug3ewiTI7xZPwAIPj-URJbqpcvQEuRicfqlFeFAwJPxK0hRagEG.jpg?r=400"
        rating={7.7}
        link="https://www.netflix.com/in/title/81240831"
        />
        <MovieProduct
        id="#43"
        title="THE NUN"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQXn2vB5EVMftz1efDfOfsJOyXeoYtqvOkDnpzfkwQB2GQwGl4seyoEcOHKXx04xr8Oe672Kg523WzU5R7lXr_b3wfxn8GbC2PA.jpg?r=3ee"
        rating={7.5}
        link="https://www.netflix.com/in/title/80233862"
        />
        <MovieProduct
        id="#44"
        title="OUIJA: ORIGIN OF EVIL"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc0WbDynH7uzlq2P4lkNXaq6Fbb-4Aa-vdu85jVH-GVcL12LdBSxhdM5U2uPqrznka5DH_Hr1rswftGQtIh4azN4pWvnS9Pblbk.jpg?r=a14"
        rating={6.8}
        link="https://www.netflix.com/in/title/80106763"
        />
      </div>
            
      <div className="row_5_title">
        CHILDREN & FAMILY MOVIES
      </div>


      <div className="container_movie_row5">
        <MovieProduct
        id="#51"
        title="STAND BY ME Doraemon 2"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWwgVHeoV9v5jbW4GYcH98jRv8Dn8Q_pAH2DJTtwxrjUuhZXy0x2j5ZRyh85KvaIXnASKqXlDgtZRkdu6700woEJVx3Hf5reAp8.jpg?r=bcb"
        rating={7.8}
        link="https://www.netflix.com/in/title/81451264"
        />
        <MovieProduct
        id="#52"
        title="CHILLAR PARTY"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTCpjF6xVcKtpyOLV1ZSi9xk4N8zwDoWSxmw02DlwqakgRUH17yk6uFeUmtiNwu2gOs3VUfl1mlGIuYUx4ye0WmwMBFZwwu_PqQ.jpg?r=d9a"
        rating={7.7}
        link="https://www.netflix.com/in-hi/title/70139072"
        />
        <MovieProduct
        id="#53"
        title="WE CAN BE HEROES"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf5it9ueUezYQNOOlQ4rK6yFQoZc0vneKukEmCUUwv61gzDERkJiZYj8sj_oIvhOv09hq1NlQ2eRsHl465xNlJIjgRqGefz5hJXfpmEmhvfUr2VHwNDYYw0c-FI2K0zoEoSh.jpg?r=d2a"
        rating={7.5}
        link="https://www.netflix.com/in/title/80994666"
        />
        <MovieProduct
        id="#54"
        title="POKEMON The Movie: SECRETS OF JUNGLE"
        image="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbHNP8DSwJSYeWk-23Cd2C2PnUxziSZ2tVvXm8bhQ7zQfAvAkWKgsgr0nxsGFpME07Byj6llO2RbgLArftwNzhL-UKSyuAPpdLg.jpg?r=2a7"
        rating={6.8}
        link="https://www.netflix.com/in/title/81346307"
        />
      </div>
    </div>
    <div className="Footer_Homepage_movie">
      <Footer/>
    </div>
    </>
  )
}

export default Homepage
