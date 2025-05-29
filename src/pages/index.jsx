import { render } from '@czechitas/render';
import '../global.css';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1 className="title">Nadpis</h1>

    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta corporis tenetur eos accusamus similique accusantium ipsam sunt esse facilis dolorem suscipit magni cumque, temporibus modi error, maxime aliquam rerum ipsum.</p>

    <p>
      <a href="#" className="link">Odkaz</a>
    </p>

    <button id="btn">Tlacitko</button>
  </div>
);

// sem ↓↓↓ piš kód, který pracuje s elementy na stránce
