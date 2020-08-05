import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
             <article className="teacher-item">
           <header>
             <img src="https://avatars3.githubusercontent.com/u/1606453?s=460&u=602e6c69bedc353bd5a1e50747d42b509f187c4d&v=4" alt="PHWEB"/>
             <div><strong>phweb</strong> <span>Desenvolvedor</span>
            </div>
           </header>
           <p>Desenvolvedor Front-End, UX/UI designer apaixonado pelas tecnologias mais modernas de desenvolvimento web e mobile como ReactJS, NodeJS, React Native </p>
           <footer>
             <p>Preço/hora 
             <strong>R$80,00</strong> </p>
             <button type="button">
            <img src={whatsappIcon} alt="WhatsApp"/>Entrar em contato
             </button>
           </footer>
         </article>
  );
  
}

export default TeacherItem;