# Opakování: JavaScript

*Opakovací lekce JavaScriptu pro DA: Web*

## 1. Vyhledávání prvků v DOM

DOM elementy hledáme pomocí:
- `document.querySelector`, když chceme jenom jeden (ten první, který odpovídá selektoru v závorce)
- `document.querySelectorAll`, když chceme všechny, které odpovídají selektoru v závorce

Selektor v závorce je libovolný CSS selektor, např. `h1`, `.menuItem`, `#add-button`, apod.

```js
const title = document.querySelector('h1');
```

## 2. Změna vlastností prvku na stránce

Máme-li vybraný DOM element, můžeme mu měnit vlastnosti, např.:
- `textContent` - textový obsah prvku
- `innerHTML` - HTML obsah prvku
- `style.backgroundColor` - jakoukoliv CSS vlastnost, pokud je v CSS název v CSS víceslovný (`font-family`), zapisujeme v JavaScriptu jako camelCase (`fontFamily`)
- `alt`, `src`, `href`, apod. - jakýkoliv HTML atribut prvku

```js
const link = document.querySelector('a');
link.textContent = 'Jenom text';
link.innerHTML = 'Text včetně <strong>HTML</strong> značek';
link.href = 'https://google.com';
link.style.color = 'red';
```

**Otázka k zamyšlení:** Co se stane, když daný prvek neexistuje nebo napíšeme špatně selektor uvnitř `querySelector`?

## 3. Události

Pokud chceme reagovat na nějakou událost (např. kliknutí, najetí kurzorem myši, změna formulářového pole, apod.) najdeme si pomocí `document.querySelector` daný prvek a použijeme metodu `addEventListener`. Ta přijímá dva parametry - **název události** na kterou chceme reagovat a **funkci**, která se má spustit, když k události dojde. Této funkci říkáme **eventHandler**.

Funkci můžeme mít pojmenovanou a vytvořenou dopředu. Pak předáváme pouze její název. Případně můžeme předat anonymní funkci přímo do `addEventListener`.

```js
const btn = document.querySelector('#tlacitko');

// s pojmenovanou existující funkcí
const myFunction = () => {
  console.log('Kvak 🐸');
}
btn.addEventListener('click', myFunction);

// nebo s anonymní funkcí
btn.addEventListener('click', () => {
  console.log('Kvík 🐷')
});
```

## 4. Objekty a pole

**Objekty** slouží pro uchovávání složitějších strukturovaných dat, např. popis reálného objektu, osoby, apod.

Objekty mají **vlastnosti**. Každá vlastnost se skládá z **klíče** (název vlastnosti) a **hodnoty**.

```js
const person = {
  firstName: 'Alena',
  lastName: 'Nováková',
  age: 27,
  canDrive: true,
};
```

**Pole** slouží pro uchování více hodnot v rámci jedné proměnné. Pole můžeme brát jako **seznam** více hodnot.

Každý prvek v poli má svůj **index**, který se počítá od nuly. Počet prvků v poli můžeme zjistit pomocí vlastnosti `pole.length`.

```js
const numbers = [1, 2, 3, 4];
const names = ['Alex', 'Beáta', 'Cecílie', 'Dáša'];

console.log( names[1] ); // Beáta
console.log( names.length ); // 4
```

Při práci na reálných projektech zjistíte, že nejčastěji pracujete s **polem objektů**. Objekt popisuje nějakou reálnou věc a v poli jich máme víc.

```js
const students = [
  { name: 'Alena', mark: 1 },
  { name: 'Marek', mark: 4 },
  { name: 'Lenka', mark: 2 },
  { name: 'Pavel', mark: 1 },
];

console.log( students[1].name ); // Marek
console.log( students[1].mark ); // 4
```

## 5. Metody pro práci s polem

Nejpoužívanější jsou `forEach`, `filter` a `map`. Všechny jsou si velmi podobné v tom, že jako parametr do nich předáme funkci, kterou bude JavaScript volat a jako parametr do této funkce postupně předávat všechny prvky pole.

### forEach

Vykoná funkci pro každý prvek pole.

```js
const names = ['Alex', 'Beáta', 'Cecílie', 'Dáša'];

name.forEach( (item) => {
  console.log(item);
} );
```

### filter

Z původního pole vyfiltruje hodnoty a uloží je do nového pole. Funkce uvnitř musí pro každý prvek vrátit `true` nebo `false` podle toho, zda prvek ve vyfiltrovaném poli chceme nebo ne.

```js
const numbers = [1, 8, 3, 17, 24, 32, 115, 42, 7];

const smallNumbers = numbers.forEach( (item) => {
  if (item < 10) {
    return true;
  } else {
    return false;
  }
} );

console.log( smallNumbers );
```

Zápis jde elegantně zkrátit:
```js
const smallNumbers = numbers.filter(item => item < 10);
```

### map

Na základě hodnot jednoho pole vytvoří nové pole, kde místo původních prvků budou na stejných pozicích pozměněné hodnoty.

```js
const numbers = [1, 2, 3, 4];

const double = numbers.map( (item) => {
  return item * 2;
} );

console.log(double); // [2, 4, 6, 8]
```

Opět lze elegantně zkrátit na:
```js
const double = numbers.map( item => item * 2 );
```

## 6. Komponenty a props

Komponenta je funkce, která vrací JSX. JSX je způsob, jak zapsat HTML uvnitř JavaScriptu. Pozor na drobné odlišnosti od normálního HTML, např. `className` místo `class`.

```jsx
const Komponenta = () => {
  return (
    <div className="box">
      <h2>Komponenta</h2>
      <p>Zrcadlo, pověz mi, kdo je ta nejkrásnější komponenta na světě?</p>
    </div>
  );
};
```

Komponentu naimportujeme a následně použijeme takto:
```jsx
<Komponenta />
```

### Props

Komponenty mohou mít i tzv. **props** - v podstatě parametry, které chceme do komponenty předat. Naším cílem je poslad do komponenty data, se kterými bude komponenta pracovat.

```jsx
<Person name="Alice" age={27} />
```

Komponentu musímeme upravit tak, aby mohla props přijmout:

```jsx
const Person = (props) => {
  return (
    <div className="person">
      <h2>{props.name}</h2>
      <p>Věk: {props.age}</p>
    </div>
  );
};
```

Props můžeme přímo v hlavičce funkce **destrukturovat** a pak už jen používat názvy proměnných bez `props.`

```jsx
const Person = ({name, age}) => {
  return (
    <div className="person">
      <h2>{name}</h2>
      <p>Věk: {age}</p>
    </div>
  );
};
```

## 7. Stahování dat pomocí fetch

`fetch` je zabudovaná funkce v JavaScriptu, která nám umožní stáhnout data ze vzdáleného serveru (API).

Server nám pošle odpověď (**response**), ze které my ještě musíme získat data, většinou ve formátu **JSON**.

Na odpověď serveru i data chceme počkat pomocí příkazu `await`, ale ten funguje pouze uvnitř funkcí, které jsou označené jako `async`.

```js
const getData = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  const jsonData = await response.json();

  console.log(jsonData);
  console.log(jsonData[0].strDrink);
  console.log(jsonData[0].strInstructions);
}

getData();
```


