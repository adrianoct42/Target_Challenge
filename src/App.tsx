import "./App.css";
import { dummyData } from "./data/dummyData";
import type { DataItem } from "./data/dummyData";

function App() {
  // 1)
  const i = 13;
  let k = 0;
  let somatorio = 0;
  for (i; i > k; k++) {
    somatorio = somatorio + k;
  }
  console.log(`O somatório do loop é: ${somatorio}`);

  // 2)
  const fibonacci = [0, 1];
  const fibonacciDetector = (value: number) => {
    if (value < 0) return;

    while (fibonacci[fibonacci.length - 1] < value) {
      const nextValue =
        fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(nextValue);
    }

    const isFibonacci = fibonacci.includes(value);

    console.log(
      `O valor digitado ${
        isFibonacci ? "É" : "NÃO É"
      } pertencente a Sequência de Fibonacci.`
    );
  };

  fibonacciDetector(2);
  fibonacciDetector(3);
  fibonacciDetector(4);
  fibonacciDetector(5);
  fibonacciDetector(6);
  fibonacciDetector(7);
  fibonacciDetector(8);

  // 3)
  let menorValor = Infinity;
  let maiorValor = -Infinity;
  let diaMenor: number, diaMaior: number;
  let diasValidos = 0;
  let acimaMedia = 0;
  let mediaMes = 0;
  dummyData.forEach((value) => {
    if (value.valor > 0) {
      mediaMes = mediaMes + value.valor;
      diasValidos++;
    }
  });
  mediaMes = mediaMes / diasValidos;
  console.log(mediaMes);

  function returnAnalysis() {
    dummyData.map((data: DataItem) => {
      if (data.valor < menorValor && data.valor !== 0) {
        menorValor = data.valor;
        diaMenor = data.dia;
      }
      if (data.valor > maiorValor && data.valor !== 0) {
        maiorValor = data.valor;
        diaMaior = data.dia;
      }
      if (data.valor > mediaMes && data.valor !== 0) acimaMedia++;
    });

    console.log(
      `Menor valor do faturamento: Dia ${diaMenor}, valor: ${menorValor}`
    );
    console.log(
      `Maior valor do faturamento: Dia ${diaMaior}, valor: ${maiorValor}`
    );
    console.log(
      `Quantidade de vezes em que o faturamento passou a média: ${acimaMedia}`
    );
  }

  returnAnalysis();

  // 4)
  const SP = 67836.43;
  const RJ = 36678.66;
  const MG = 29229.88;
  const ES = 27165.48;
  const Outros = 19849.53;
  const Total = SP + RJ + MG + ES + Outros;
  const PercentSP = Math.floor((SP / Total) * 100);
  const PercentRJ = Math.floor((RJ / Total) * 100);
  const PercentMG = Math.floor((MG / Total) * 100);
  const PercentES = Math.floor((ES / Total) * 100);
  const PercentOutros = Math.floor((Outros / Total) * 100);

  console.log(
    `As porcentagens de participação por região foram: SP: ${PercentSP}%, RJ: ${PercentRJ}%, MG: ${PercentMG}%, ES: ${PercentES}%, Outros: ${PercentOutros}%`
  );

  // 5)
  function reverseString(value: string) {
    let reversed = "";
    for (let i = value.length - 1; i >= 0; i--) {
      reversed = reversed + value[i];
    }
    console.log(`A string "${value}" invertida se torna: ${reversed}`);
  }

  reverseString("Hello World!");
  reverseString("Live long and prosper.");
  reverseString("Obrigado pela oportunidade! :)");
}

export default App;
