import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ userInput }) {
    console.log(userInput)
    const resultData = calculateInvestmentResults(userInput);
    console.log(resultData)
    const initialInvestment =
        resultData[0].valueEndOfYear -
        resultData[0].interest -
        resultData[0].annualInvestment;


    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Investment Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {resultData.map(yearData => {
                        const totalIntrest =
                            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                        const totalAmountInvested = yearData.valueEndOfYear - totalIntrest;
                        return (
                            <tr key={yearData}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalIntrest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </>
    );
}