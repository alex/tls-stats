tls-stats
=========

This is a Chrome/Firefox Extension which collects stats about your browsing
(stored entirely locally!) so that you know which websites aren't using TLS.

Right now the only thing it tracks is which hosts you make HTTP requests to,
some day in the future I'd love for it to also track which hosts have bad TLS
configurations (TLS 1.0, lack of forward security, non-AEAD ciphersuites, etc.).
The current blocker for tracking of TLS quality is missing APIs, which
`hopefully will be addressed`_.

The goal as that by collecting data on people's actual usage, they will be
better informed about which websites to complain to because they don't value our
privacy.

At present this is not available in the Chrome Store, you have to clone this
repo, enable developer mode, and install it yourself.

.. _`hopefully will be addressed`: https://codereview.chromium.org/2156763003/
