import React from 'react';
import axios from 'axios';

class ReportsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getReports: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/reports').then(response => this.setState({
            getReports: response.data
        }));
    }

    renderReportsTable() {
        return this.state.getReports.map((report, index) => {
            return (
                <tr className="reports__tablerow" id={index}>
                    <td className="reports__tabledata">{report.report_user.user_id}</td>
                    <td className="reports__tabledata">{report.report_user.user_name}</td>
                    <td className="reports__tabledata">{report.report_date}</td>
                    <td className="reports__tabledata">{report.report_time}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="reports">
                    <div className="reports__modal">
                        <button className="reports__close" onClick={this.props.onClose}>
                            <img src="/assets/close.svg" alt="Close Icon" className="reports__close-image"/>
                        </button>
                        <p className="reports__message">Relatório de Atividade:</p>
                        <table className="reports__table">
                            <thead className="reports__tablehead">
                                <tr className="reports__tablerow">
                                    <th className="reports__tableh">Matrícula do Usuário</th>
                                    <th className="reports__tableh">Nome do Usuário</th>
                                    <th className="reports__tableh">Data de Entrada</th>
                                    <th className="reports__tableh">Horário de Entrada</th>
                                </tr>
                            </thead>
                            <tbody className="reports__tablebody">
                                {this.renderReportsTable()}
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default ReportsModal;