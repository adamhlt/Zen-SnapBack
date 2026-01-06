(function() {
    const MOD_NAME = "Zen-SnapBack";
    const CMD_ID = "cmd_zenPinnedTabReset";

    const init = (win) => {
        if (win._zenResetPinnedLoaded) return;

        win.gBrowser.tabContainer.addEventListener('dblclick', (e) => {
            const tab = e.target.closest('tab');
            
            // Logic only for pinned tabs
            if (tab?.pinned) {
                e.preventDefault();
                e.stopPropagation();

                // Select the tab so the command knows which one to target
                win.gBrowser.selectedTab = tab;

                // Execute Zen's native reset command
                const cmd = win.document.getElementById(CMD_ID);
                if (cmd) {
                    cmd.doCommand();
                    console.log(`[${MOD_NAME}] Native Zen reset triggered.`);
                } else {
                    console.error(`[${MOD_NAME}] Command ${CMD_ID} not found.`);
                }
            }
        }, true);

        win._zenResetPinnedLoaded = true;
    };

    // --- Optimized Setup Engine ---
    const setup = (win) => {
        if (win.gBrowserInit?.delayedStartupFinished) {
            init(win);
        } else {
            let obs = (subject, topic) => {
                if (topic === "browser-delayed-startup-finished" && subject === win) {
                    Services.obs.removeObserver(obs, topic);
                    init(win);
                }
            };
            Services.obs.addObserver(obs, "browser-delayed-startup-finished");
        }
    };

    const wins = Services.wm.getEnumerator("navigator:browser");
    while (wins.hasMoreElements()) setup(wins.getNext());
    
    Services.obs.addObserver((win) => {
        win.addEventListener("load", () => setup(win), { once: true });
    }, "domwindowopened");

    console.log(`[${MOD_NAME}] Engine loaded using ${CMD_ID}.`);
})();