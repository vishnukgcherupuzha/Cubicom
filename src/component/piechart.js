import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';

const data = [
  { name: 'OFD', value: 55 },
  { name: 'BOOKING', value: 121 },
  { name: 'DEL', value: 430 },
  { name: 'UNDEl', value: 23 },
];
const COLORS = ['#FAD37B', '#EA8A72', '#86D5A2', '#FF13DC'];

export default class pieChart extends PureComponent {
  render() {
    return (
      <div>
        <PieChart width={152} height={152} className="piechart">
          <Pie
            data={data}
            cx={70}
            cy={70}
            outerRadius={75}
            paddingAngle={0}
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </div>
    );
  }
}

