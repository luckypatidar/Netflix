.card {
  box-shadow: 0 0.2rem 0.8rem rgba(40, 40, 50, 0.1);
  background: #fff;
  text-align: center;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content:center;
  transition: all 0.5s ease;
  height: fit-content;
  width: fit-content;
  box-sizing: border-box;
  // margin: 10px;
  
  &:hover {
    box-shadow: 0 0.2rem 0.8rem rgba(40, 40, 50, 0);
    // background: transparent;
    
  }

  & figure {
    // position: center;
    width: 30rem;
    margin-bottom: 0rem;
    

    & span {
      // position: absolute;
      width: 9rem;
      height: 9rem;
      top: -4rem;
      left: -3rem;
      border-radius: 50%;
      background: rgb(240, 240, 240);
      z-index: 1;
      opacity: 0.3;
    }

    & img {
      position: center;
      width: 30rem;
    }
  }

  & p {
    width: 100%;
    margin-top: 1rem;
  }

  & a {
    display: block;
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 2rem;
  }

@media (max-width:900px){
  margin: auto;
  height: 350px;
  width: 350px;
}

}

.footer {
  display: flex;
  justify-content: center;
  margin-top: 3rem !important;
  margin-bottom: 3rem;

  & button {
    font-family: Poppins;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 600;
    transition: all 0.3s ease;
    background: none;
  }

  & i {
    margin-left: 5px;
  }
}

.subtitle {
  font-size:30px;
}

.wrapper{
  width: 300px;
  height:400px;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.wrapper:before{
  content: '';
  position: absolute;
  top: 0;
  left: 180%;
  height: 100%;
  width: 100%;
  background: rgba(255,255,255,0.3);
  z-index: 1;
  transform: skew(45deg);
  transition: .5s;
}

.wrapper:hover:before{
  left: -180%;
}

.wrapper img {
  height:400px;
  width: 300px;
  filter: grayscale(100%);
  transition: 2s;
}

.wrapper:hover img{
  filter: grayscale(0%);
  transform: scale(1.1);
}

.wrapper h2 {
  background: tomato;
  font-family: Poppins;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  // transition:perspective(400px) rotateY(90deg);
  // transform-origin: right ;
  // transition: 1s;
}
// .wrapper:hover h2{
//    transform: perspective(400px) rotateY(90deg);
// }

.wrapper ul{
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.wrapper ul li{
  background: #333;
  height:40px;
  width:40px;
  text-align: center;
  line-height:40px;
  transform: perspective(600px) rotateY(90deg);
  transition: .5s;
  transform-origin: left;
}
.wrapper:hover ul li{
  transform: perspective(800px) rotateY(0deg);
}

.wrapper:hover ul li:nth-child(1){
  transition-delay:0.2s;
}
.wrapper:hover ul li:nth-child(2){
  transition-delay:0.6s;
}
.wrapper:hover ul li:nth-child(3){
  transition-delay:0.8s;
}
.wrapper:hover ul li:nth-child(4){
  transition-delay:1s;
}
.wrapper ul li a{
  color: tomato;
}

 h1 {
  background: #303030;
  font-family: Poppins;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  padding: 10px 0;
  // position: absolute;
  width: 100%;
  // transition:perspective(400px) rotateY(90deg);
  // transform-origin: right ;
  // transition: 1s;
}

.container {
  background-color: yellow;
  width: 70%;
  margin: auto;
}

// .demo{
//   background-color:red;
// }

.pane{
  width: 30%;
  display: flex;
  align-items: center;
  justify-content:space-between;

  @media (max-width:1000px){
    width: 100%;
    padding: 0 45px;
}
}