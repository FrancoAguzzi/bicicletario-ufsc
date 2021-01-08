import React, { useState } from 'react';
import axios from 'axios';

const ReportsModal = props => {
    const renderReportsTable = () => {
        if (props.reportsList.length) {
            return props.reportsList.map((report, index) => {
                return (
                    <tr className="reports__tablerow" key={report._id}>
                        <td className="reports__tabledata">{report.report_user.user_id}</td>
                        <td className="reports__tabledata">{report.report_user.user_name}</td>
                        <td className="reports__tabledata">{report.report_date}</td>
                        <td className="reports__tabledata">{report.report_time}</td>
                    </tr>
                )
            })
        }
    }

    return (
        <div className="reports">
                <div className="reports__modal">
                    <button className="reports__close" onClick={props.onClose}>
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
                            {renderReportsTable()}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default ReportsModal;