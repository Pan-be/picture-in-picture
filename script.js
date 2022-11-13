const videoElement = document.getElementById("video")
const btn = document.getElementById("button")

const selectMediaStream = async () => {
	try {
		const media = await navigator.mediaDevices.getDisplayMedia()
		videoElement.srcObject = media
		videoElement.onloadedmetadata = () => {
			videoElement.play()
		}
	} catch (err) {
		// catch err
		console.log("error:", err)
	}
}

btn.addEventListener("click", async () => {
	btn.disabled = true

	await videoElement.requestPictureInPicture()

	btn.disabled = false
})

selectMediaStream()
