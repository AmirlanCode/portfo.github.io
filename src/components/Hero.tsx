import HeroImage from '../assets/profile.jpg'

const Hero = () => {
    return(
        <div className="bg-black h-screen text-white text-center py-40">
        <img src={HeroImage} alt = '' className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform 
        duration-300 
        hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {''}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Amirlan Aubakirov</span>
            <br>
            </br>
            Flutter developer and Web developer
        </h1>
        <div>
            <h1 className='text-2xl font-bold'>
                Contact with me <br></br>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>My telegram nickname: @amirlancode</span> 
            </h1>
        </div>
        </div>
    );
}

export default Hero