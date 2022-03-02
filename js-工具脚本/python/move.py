import pyautogui
rx = 2451
ry = 1463
for x in range(1920):
    for y in range(1080):
        pyautogui.moveTo(x,y,duration=.11)
    pyautogui.moveTo(x,1080,duration=.4)
