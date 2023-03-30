import Header from '../Header';

import imagem1 from '../../assets/images/imagem1.png';
import imagem2 from '../../assets/images/imagem2.png';
import imagem3 from '../../assets/images/imagem3.png';
import imagem4 from '../../assets/images/imagem4.png';
import imagem5 from '../../assets/images/imagem5.png';
import imagem6 from '../../assets/images/imagem6.png';

const Imagens = () => {
    return <>
    

    <Header/>
    
    <h3 class="text-center my-5">Imagens</h3>

        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <img src={imagem1}alt="Imagem 1" class="img-fluid rounded"/>
                </div>
                <div class="col-md-4 mb-4">
                    <img src={imagem2} alt="Imagem 2" class="img-fluid rounded"/>
                </div>
                <div class="col-md-4 mb-4">
                    <img src={imagem3} alt="Imagem 3" class="img-fluid rounded"/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-4">
                    <img src={imagem4} alt="Imagem 4" class="img-fluid rounded"/>
                </div>
                <div class="col-md-6 mb-4">
                    <img src={imagem5} alt="Imagem 5" class="img-fluid rounded"/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 mb-4">
                    <img src={imagem6} alt="Imagem 6" class="img-fluid rounded"/>
                </div>
            </div>
        </div>
            
    
    
    </>
}


export default Imagens;