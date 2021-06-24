

const MoneyValues = ({addValue}) => {
    return (
        <div className="section">
            <table>
                <thead>
                <tr>
                    <th onClick={() => addValue(1)}>$1</th>
                    <th onClick={() => addValue(5)}>$5</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <td onClick={() => addValue(10)}>$10</td>
                    <td onClick={() => addValue(20)}>$20</td>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default MoneyValues
