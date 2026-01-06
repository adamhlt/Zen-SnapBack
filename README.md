
```
                      _____                  _____                   ____             __  
                     /__  /  ___  ____      / ___/____  ____ _____  / __ )____ ______/ /__
                       / /  / _ \/ __ \     \__ \/ __ \/ __ `/ __ \/ __  / __ `/ ___/ //_/
                      / /__/  __/ / / /    ___/ / / / / /_/ / /_/ / /_/ / /_/ / /__/ ,<   
                     /____/\___/_/ /_/    /____/_/ /_/\__,_/ .___/_____/\__,_/\___/_/|_|  
                                                          /_/                                

```


<p align="center">
    <img src="https://img.shields.io/badge/language-JavaScript-%23f7df1e.svg?style=for-the-badge&logo=javascript" alt="JavaScript">
    <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-0052cc.svg?style=for-the-badge&logo=zen" alt="Multi-Platform">
    <img src="https://img.shields.io/badge/target-Zen%20Browser-00aae4.svg?style=for-the-badge&logo=zen" alt="Zen Browser">
</p>

**Zen-SnapBack** is an ultra-lightweight power-user mod for **Zen Browser**. It allows you to instantly reset any pinned tab to its original "Home" URL with a simple double-click.

---

## 🛠️ Installation

To use this mod, you need a **script loader** (which enables Zen to execute `.uc.js` files).

### Step 1: Install a Script Loader
If you haven't enabled script support yet, we recommend **fx-autoconfig**, the gold standard for Firefox-based browsers:
[**fx-autoconfig**](https://github.com/MrOtherGuy/fx-autoconfig)

> Follow their instructions to place the `config.js` and `defaults` files into your Zen installation folder.

### Step 2: Install Zen-SnapBack
Once your loader is ready:

1.  **Open your Zen Profile Folder:**
    * Type `about:support` in the address bar.
    * Find **Profile Folder** and click **Open Folder**.
2.  **Navigate to the `chrome` folder:**
    * If it doesn't exist, create a new folder named `chrome`.
3.  **Add the script:**
    * Download `zenSnapBack.uc.js` from this repository.
    * Drop it into the `chrome` folder.
4.  **Restart Zen Browser.**

---

## 🚀 How to Use

1.  **Pin a tab** (e.g., Gmail, YouTube, or your favorite dashboard).
2.  **Navigate freely** within that tab.
3.  **Double-click** the tab icon or label in the tab bar.
4.  **Result:** The tab instantly resets to its original URL, and the navigation history for that tab is cleared.

---

## ⚙️ Technical Details
The script hooks into Zen's internal command dispatcher:
* **Command ID:** `cmd_zenPinnedTabReset`

By triggering the native command rather than just reloading the URL, the mod ensures perfect synchronization with Zen's session management and UI state.



---

## 🤝 Contributing
Feedback and Pull Requests are welcome! If you encounter a bug or have an idea for a feature, please open an *Issue*.
