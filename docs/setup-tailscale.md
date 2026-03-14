# Tailscale Professional Setup: Kai Project

This guide explains how to set up Tailscale for the Kai project using the **Sidecar Architecture** for secure, subdomain-based access.

---

## 🚀 Concept
Each application service is paired with a Tailscale container (sidecar) that provides it with a unique identity on the Tailnet (`tamarin-ph.ts.net`).

- **Secure**: No public ports exposed.
- **SSL**: Automatic HTTPS certificates.
- **URL**: `https://kai.tamarin-ph.ts.net`

---

## 🛠 Setup Instructions

### 1. Tailscale Dashboard
1.  **Login**: Use the shared project account.
2.  **MagicDNS**: Ensure **MagicDNS** and **HTTPS Certificates** are enabled in `Settings > DNS`.
3.  **Generate Auth Key**: 
    - Go to `Settings > Keys`.
    - Generate a **Reusable** and **Pre-authorized** key.
    - Copy the key (starts with `tskey-auth-...`).

### 2. Local Configuration
1.  **Environment Variables**:
    Create or update your `.env` file in the root directory:
    ```bash
    TS_AUTHKEY=tskey-auth-your-key-here
    ```

2.  **Run the Stack**:
    ```bash
    make up
    ```

3.  **Verify**:
    Check the logs of the `kai` container:
    ```bash
    docker logs kai
    ```
    Look for: `cert("kai..."): got cert`.

---

## 🛠 Development (Local Proxy) Mode

If you want to run your app on your host machine (e.g., `npm run dev`) but still access it via the Tailscale HTTPS URL, use the Local Proxy mode.

1.  **Start the Proxy**:
    ```bash
    make dev-ts
    ```
    This starts a Tailscale sidecar that points to `host.docker.internal:3000`.

2.  **Start your Local App**:
    ```bash
    npm run dev
    ```

3.  **Access**:
    Open `https://kai.tamarin-ph.ts.net` in your browser.

---

## ⚠️ Tailscale Dashboard Changes Needed
To ensure `kai.tamarin-ph.ts.net` works correctly:

1.  **Node Approval**: If your Tailnet has "Device Approval" enabled, go to the Machines list and approve the new `kai` node.
2.  **Tailscale Funnel (Optional)**: If you need to expose this to the public internet (not just devices on the Tailnet), you must enable **Funnel** in the dashboard and update `infra/tailscale/kai.json` to set `"AllowFunnel": true`.
3.  **MagicDNS**: Confirm that the tailnet name is `tamarin-ph`. If it differs, update `infra/tailscale/kai.json` accordingly.

---
_Setup based on Barcody architecture._
