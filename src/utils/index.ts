import moment from 'moment'

export function calculateEndDate(contractAcceptedDate:any, projectDuration:any, durationUnit:any) {
    // Convert the contractAcceptedDate to a moment object
    const acceptedDate = moment(contractAcceptedDate, 'YYYY-MM-DD');

    // Calculate the project end date based on the duration and unit
    const endDate = acceptedDate.clone().add(projectDuration, durationUnit);
    // const endDate = acceptedDate.add(projectDuration, durationUnit);

    // Return the end date as a timestamp (in milliseconds)
    const timestamp = endDate.valueOf(),
          intervalsCalc =   endDate.diff(acceptedDate, 'days')

    return { 
       timestamp,
       intervalsCalc
    }
}

export const toWei = (num:number) => ethers.utils.parseEther(num.toString())
export const fromWei = (num:string) => ethers.utils.formatEther(num)
