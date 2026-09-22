# Yang Liu — Academic Homepage

Static, responsive GitHub Pages website. No build step or external font dependencies.

## Preview

Run `python -m http.server 8080 --directory homepage` from the CV project folder, then open http://localhost:8080. Opening index.html directly also works.

## GitHub Pages

1. Create a repository named `Ly041021.github.io` for an account-level website (or any name for a project website).
2. Put the **contents** of this folder at the repository root, including `assets`, `.nojekyll`, and the files beside this README.
3. In repository Settings → Pages, select “Deploy from a branch”, branch `main`, folder `/ (root)`, and Save.
4. The account website will be available at `https://Ly041021.github.io/`. Project repositories use `https://Ly041021.github.io/REPOSITORY/`.

Relative paths support both account and project websites. No custom domain is configured.

## Editing

- `index.html`: biography, authors, publication status, experience, and links.
- `style.css`: layout, typography, colors, and mobile styles.
- `assets/portrait.png`: profile photo.
- CV downloads are excluded from the public site. Original CVs remain in the parent CV project.
- `script.js`: progressive navigation highlighting; content also works without JavaScript.

## Content provenance and pending items

- Layout inspired by https://boyuan-an.github.io/; written independently, without copying its biography or project media.
- TIO-Former and OmniRisk images are crops from the author's arXiv papers, https://arxiv.org/pdf/2609.17198 and https://arxiv.org/pdf/2609.18191.
- White Rhino figure is from the locally supplied manuscript, page 2. Full unpublished PDF is not included.
- The dexterous grasping visual is a conceptual SVG illustration, visibly labeled; replace it with real experiment media when available.
- Advisor Fei Gao at Differential Robotics and FAST Lab follows the user's information. Scholar profile link follows the reference site's Fei Gao link.
- OmniRisk author list follows the current arXiv PDF; unlike the older CV, it does not include Xin Zhou.
- Published at https://ly041021.github.io/. Paper code links follow the public manuscripts.
- Only email is published as contact information. CV files, phone number, GPA, and the awards section are excluded from the public site.
- Publication review statuses should be updated as decisions become available.
