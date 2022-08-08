import React from 'react'
import styled from 'styled-components'
import CanvasJSReact from '../assets/js/canvasjs.react'
//const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


// CanvasJS.addColorSet("customColorSet1", [
//   "hsl(10, 79%, 65%)",                
//   "hsl(10, 79%, 65%)",
//   "RoyalBlue",
//   "hsl(10, 79%, 65%)",
//   "hsl(10, 79%, 65%)",
//   "hsl(10, 79%, 65%)",
//   "hsl(10, 79%, 65%)",
//  ]
// ); 


// const dataPoints =[];
// class Spending extends Component {
  // render() {
const Spending = () => {
  const options = {
    backgroundColor: "hsl(33, 100%, 98%)",
    // colorSet: "customColorSet1",
    height: 200,
    
    axisX:{
      tickLength: 0,
      lineThickness: 0,
      tickThickness: 0,
      indexLabelFontColor: "red"
     },

    axisY:{
      tickLength: 0,
      lineThickness: 0,
      gridThickness: 0,
     },

    toolTip: {
			cornerRadius: 10,
		},

    data: [{				
              type: "column",
              color: "hsl(10, 79%, 65%)",
              yValueFormatString: "$#,##0.00",
              cursor: "pointer",
              dataPoints: 
                            [
                                { label: "mon", y: 17.45   },
                                { label: "tue", y: 34.91  },
                                { label: "wed", y: 52.36  },
                                { label: "thu",  y: 31.07  },
                                { label: "fri",  y: 23.29  },
                                { label: "sat",  y: 43.28  },
                                { label: "sun",  y: 25.48  },
                            ],
     }]
 }

 const summ = new Map([
                  [ "mon", 17.45  ],
                  [ "tue", 34.91  ],
                  [ "wed", 52.36  ],
                  [ "thu",  31.07  ],
                  [ "fri",  23.29  ],
                  [ "sat",  43.28  ],
                  [ "sun",  25.48  ],
 ])
  let sum = 0;

  summ.forEach(value => {
  sum += value * 4;
  
});

  return (
    <SDiv>
      <SpenDiv>
        <p className='p3'>Spending - Last 7 days</p>
        <BChart>
          <CanvasJSChart options = {options}
              // onRef = {ref => this.chart = ref}
              className='canva'
          />
        </BChart>
        <hr />
        <BLpt>
          <div className='pt1'>
            <p className='mnth'><small>Total this month</small></p>
            <p className='amt'>${Math.round(sum)}</p>
          </div>

          <div className='pt2'>
            <p className='perc'><b>+2.4%</b></p>
            <p className='mnth'><small>from last month</small></p>
          </div>
        </BLpt>
      </SpenDiv>
    </SDiv>
  );
}


// componentDidMount(){
// const chart = this.chart;
//   fetch('data.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     for (var i = 0; i < data.length; i++) {
//       dataPoints.push({
//         label: data[i].label,
//         y: data[i].y
//       });
//     }
//     chart.render();
//   });
// }
// }


const SDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpenDiv = styled.div`
  width: 400px;
  height: 400px;
  background-color: hsl(33, 100%, 98%);
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 50px;

  .p3 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 20px;
    padding-top: 20px;
    color: hsl(25, 47%, 15%);
  }

  @media only screen and (max-width: 375px) {
    width: 330px;
    margin-bottom: 20px;
}
`;

const BChart = styled.div`
    padding-top: 30px;
    margin-bottom: 10px;
    color: hsl(27, 66%, 92%);

    .canva {
      width: 380px;
    }
 `;

const BLpt = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'DM Sans', sans-serif;

  .pt1 {
    padding-top: 20px;
  }
  .pt2 {
    padding-top: 40px;
  }
  .mnth {
    color: hsl(28, 10%, 53%);
    font-size: small;
    font-weight: 400;
  }
  .amt, .perc {
    color:hsl(25, 47%, 15%);
  }
  .amt {
    font-size: 36px;
    font-weight: 700;
  }
  .perc {
    font-size: small;
    font-weight: 400;
  }
`;

export default Spending
