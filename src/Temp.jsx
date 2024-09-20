import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Temp.css"


function infobox({info}) {
    // let info = {
    //     city:"Delhi",
    //     humidity: 70,
    //     temp: 34.05,
    //     tempMAx:34.05,
    //     tempMin:34.05
    // }
    return (
        <div className="infB">
            <hr />
            <hr />
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://th.bing.com/th/id/OIP._6UW1704oYjKYfVcf84iMgAAAA?rs=1&pid=ImgDetMain"
                    title="Delhi"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>


                    <Typography variant="body2" color="text.secondary">
                        <li>temperature = {info.temp}&deg;C</li>
                        <li>Humidity = {info.humidity}</li>
                        <li>maximum temperature = {info.tempMAx}</li>
                        <li>minimum temperature = {info.tempMin}</li>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
export default infobox;