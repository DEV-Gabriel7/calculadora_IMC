import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState("");

    const calcularIMC = () => {
        const alturaM = parseFloat(altura);
        const pesoKg = parseFloat(peso);

        if (!alturaM || !pesoKg || alturaM <= 0 || pesoKg <= 0) {
            alert("Por favor, insira valores válidos.");
            return;
        }

        const resultado = pesoKg / (alturaM * alturaM);
        setImc(resultado.toFixed(2));

        if (resultado < 18.5) setClassificacao("Abaixo do peso");
        else if (resultado < 24.9) setClassificacao("Peso normal");
        else if (resultado < 29.9) setClassificacao("Sobrepeso");
        else if (resultado < 34.9) setClassificacao("Obesidade grau 1");
        else if (resultado < 39.9) setClassificacao("Obesidade grau 2");
        else setClassificacao("Obesidade grau 3");
    };

    const getClass = () => {
        if (!imc) return "";
        if (classificacao === "Peso normal") return styles.ok;
        if (classificacao === "Sobrepeso" || classificacao.includes("grau 1"))
            return styles.alerta;
        return styles.perigo;
    };

    return (
        <div className={styles.container}>
            <h1>Calculadora de IMC</h1>

            <input
                type="text"
                placeholder="Altura (em metros)"
                value={altura}
                onChange={(e) => {
                    let input = e.target.value.replace(/\D/g, ''); // remove tudo que não for número
                    if (input.length > 1) {
                        input = input[0] + '.' + input.slice(1, 3); // ponto após o primeiro número + 2 casas
                    }
                    setAltura(input);
                }}
            />


            <input
                type="number"
                placeholder="Peso (em kg)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />

            <button onClick={calcularIMC}>Calcular IMC</button>

            {imc && (
                <div className={`${styles.result} ${getClass()}`}>
                    <h2>Seu IMC: {imc}</h2>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}

            <div className={styles.tabela}>
                <h2>Tabela de Classificação</h2>
                <ul>
                    <li><span>Abaixo de 18.5:</span> Abaixo do peso</li>
                    <li><span>18.5 - 24.9:</span> Peso normal</li>
                    <li><span>25 - 29.9:</span> Sobrepeso</li>
                    <li><span>30 ou mais:</span> Obesidade</li>
                </ul>
            </div>
        </div>
    );
};

export default Form;
