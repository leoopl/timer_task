export default function timeToSeconds(time: string){
    const [hr = '0', min = '0', sec = '0'] = time.split(":");

    const hrToSec = Number(hr) * 3600;
    const minToSec = Number(min) * 60;
    return hrToSec + minToSec + Number(sec);
}