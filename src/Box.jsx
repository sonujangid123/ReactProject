import './web.css'
import pic from './assets/img1.jpg'

function Box() {


    return (
        <>
            <div class="main-box">
                <div class="box1">
                    <div class="box1-img">
                        <img src={pic} alt="" />

                    </div>
                    <h5>Person</h5>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <button> Know More</button>

                </div>
                <div class="box1">
                    <div class="box1-img">
                        <img src={pic} alt="" />

                    </div>
                    <h5>Person</h5>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <button> Know More</button>

                </div>
                <div class="box1">
                    <div class="box1-img">
                        <img src={pic} alt="" />

                    </div>
                    <h5>Person</h5>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <button> Know More</button>

                </div>
                <div class="box1">
                    <div class="box1-img">
                        <img src={pic} alt="" />

                    </div>
                    <h5>Person</h5>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <button> Know More</button>

                </div>

            </div>

        </>
    )
}

export default Box