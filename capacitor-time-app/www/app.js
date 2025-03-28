// Nếu dùng module, thêm import
// import html2canvas from 'html2canvas';
// Nhưng để đơn giản, ta sẽ dùng CDN hoặc file local sau khi cài

document.addEventListener('DOMContentLoaded', () => {
    const showTimeBtn = document.getElementById('showTimeBtn');
    const shareTimeBtn = document.getElementById('shareTimeBtn');
    const screenshotBtn = document.getElementById('screenshotBtn');
    const timeDisplay = document.getElementById('timeDisplay');
    let currentTime = ''; // Biến lưu thời gian hiện tại

    // Hàm lấy thời gian hiện tại
    const getCurrentTime = () => {
        return new Date().toLocaleTimeString('vi-VN', { hour12: false });
    };

    // Nút hiển thị thời gian
    showTimeBtn.addEventListener('click', async () => {
        currentTime = getCurrentTime();
        timeDisplay.textContent = `Thời gian hiện tại: ${currentTime}`;

        try {
            await Capacitor.Plugins.LocalNotifications.schedule({
                notifications: [
                    {
                        title: 'Thời gian hiện tại',
                        body: currentTime,
                        id: 1,
                        schedule: { at: new Date(Date.now() + 1000) },
                    },
                ],
            });
        } catch (e) {
            console.error('Lỗi thông báo:', e);
        }
    });

    // Nút chia sẻ thời gian
    shareTimeBtn.addEventListener('click', async () => {
        if (!currentTime) {
            timeDisplay.textContent = 'Vui lòng hiển thị thời gian trước!';
            return;
        }

        try {
            await Capacitor.Plugins.Share.share({
                title: 'Thời gian hiện tại',
                text: `Thời gian hiện tại là: ${currentTime}`,
                dialogTitle: 'Chia sẻ thời gian',
            });
        } catch (e) {
            console.error('Lỗi chia sẻ:', e);
        }
    });

    // Nút chụp màn hình
    screenshotBtn.addEventListener('click', () => {
        html2canvas(document.body).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'screenshot.png';
            link.click();
        }).catch(e => {
            console.error('Lỗi chụp màn hình:', e);
            timeDisplay.textContent = 'Không thể chụp màn hình!';
        });
    });
});