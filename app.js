const dailyRate = document.getElementById('dailyRate')
const workingDays = document.getElementById('workingDays')
const overTime = document.getElementById('overTime')
const formPayroll = document.getElementById('form-payroll')
const totalPayroll = document.getElementById('totalPayroll')

const sss = 500; 
const philHealth = 300;
const pagIbig = 200;

const deduction = sss + philHealth + pagIbig;

formPayroll.addEventListener('submit', calculatePayroll)

    function calculatePayroll(e){

        const overtimeCalculation = parseFloat(overTime.value) * (dailyRate.value / 8) * 1.5;
        const payrollCalculation = parseFloat(workingDays.value * dailyRate.value) + parseFloat(overtimeCalculation) - parseFloat(deduction);

        totalPayroll.value = parseFloat(payrollCalculation).toFixed(2)
       
        e.preventDefault()

    }
