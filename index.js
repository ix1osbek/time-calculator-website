
document.getElementById("calculateBtn").addEventListener("click", function () {
   const distance = parseFloat(document.getElementById("distanceInput").value)

   const pedestrianSpeed = 3.6
   const carSpeed = 70
   const samalyotspeed = 800
   const bicespeed = 20.1

   const pedestrianTime = distance / pedestrianSpeed
   const carTime = distance / carSpeed
   const SamalyotTime = distance / samalyotspeed
   const biceTime = distance / bicespeed
   document.getElementById("pedestrianTime").textContent = `${pedestrianTime.toFixed(1)} soat`
   document.getElementById("carTime").textContent = `${carTime.toFixed(1)} soat`
   document.getElementById("SamalyotTime").textContent = `${SamalyotTime.toFixed(1)} soat`
   document.getElementById("biceTime").textContent = `${biceTime.toFixed(1)} soat`
});
