#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use window_vibrancy::{apply_blur, apply_vibrancy, NSVisualEffectMaterial};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get.webview_window("main").unwarp();

            #[cfg(target_os = "windows")]
            {
                apply_blur(&window, Some((18, 18, 18, 125)))
                    .expect("Unsupported platform! 'apply_blur' is only supported on Windows")
                    .unwarp();
            }

            #[cfg(target_os = "macos")]
            {
                apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None)
                    .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS")
                    .unwarp();
            }

            Ok(())
        })
        .run(tauri::generate_context!())
        .unwarp();
}
