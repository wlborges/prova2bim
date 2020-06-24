import React, {useState} from 'react';

import api from '../../services/api';

import './styles.css'

export default function Credito(){
    const[Nome, setNome] = useState('');
    const[Cpf, setCpf] = useState('');
    const[DataNascimento, setDataNascimento] = useState('');
    const[SalarioBruto, setSalarioBruto] = useState('');
    const[QuantidadeDependentes, setQuantidadeDependentes] = useState('');
    const[Empregado, setEmpregado] = useState('');
    const[TempoEmpregoAtual, setTempoEmpregoAtual] = useState('');
    const[RestricaoSerasa, setRestricaoSerasa] = useState('');

    const[valorLimite,setvalorLimite] = useState('');
    const[message,setmessage] = useState('');

    async function calcularCredito(e){
        e.preventDefault();


        const data = {
            Nome,
            Cpf,
            DataNascimento,
            SalarioBruto,
            QuantidadeDependentes,
            Empregado,
            TempoEmpregoAtual,
            RestricaoSerasa
        };

        const response = await api.post('credito',data);

        console.log(data);


        setvalorLimite(response.data.valorLimite);
        setmessage(response.data.message);
    };

    return(
        <div className="container">
            <form onSubmit={calcularCredito}>
                <h1>Internet Banking</h1>
                <input 
                    placeholder="Nome"
                    value={Nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input 
                    placeholder="CPF"
                    value={Cpf}
                    onChange={e => setCpf(e.target.value)}
                />
                <input 
                    placeholder="Data de Nascimento"
                    value={DataNascimento}
                    type="date"
                    onChange={e => setDataNascimento(e.target.value)}
                />
                <input 
                    placeholder="Salário Bruto"
                    value={SalarioBruto}
                    onChange={e => setSalarioBruto(e.target.value)}
                />
                <input 
                    placeholder="Quantidade de Dependentes"
                    value={QuantidadeDependentes}
                    onChange={e => setQuantidadeDependentes(e.target.value)}
                />
                <input 
                    placeholder="Empregado?"
                    value={Empregado}
                    onChange={e => setEmpregado(e.target.value)}
                />
                <input 
                    placeholder="Tempo no emprego atual"
                    value={TempoEmpregoAtual}
                    onChange={e => setTempoEmpregoAtual(e.target.value)}
                />
                <input 
                    placeholder="Restrição no Serasa?"
                    value={RestricaoSerasa}
                    onChange={e => setRestricaoSerasa(e.target.value)}
                />

                <button className="button" type="submit" >Calcular Limite</button>
            </form>

        </div>
    );

};
