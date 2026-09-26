/* ===========================================================================
   Anatomy stage — the room the body stands in.

   Three layers, each knowing only the one below it:
     • the page (targets.js)   talks to the stage, never to the drawing
     • the stage               owns the space: its size, what is layered in
                               it, and which renderer is mounted
     • the renderer            draws the body into the stage's viewport and
                               turns pointer and key input into
                               selection.toggle()
   and the MuscleSelection holds what is chosen, beneath all of them.

   So the drawing can be replaced (today the SVG AnatomyFigure, later a 3D
   model) without touching the page or the selection. A renderer is any
   class built as `new Renderer(mount, selection, { onHover })` with a
   `preview(ids)` method; it fills `mount` itself, follows the selection on
   its own, and sizes itself to the mount (see .anatomy-viewport in the CSS).
   ========================================================================= */

class AnatomyStage {
  /**
   * @param root           the .anatomy-stage element
   * @param opts.renderer  the renderer class; AnatomyFigure by default
   * @param opts.onHover   called with a Muscle when one is pointed at or
   *                       focused, and with null when it is left
   */
  constructor(root, selection, { renderer = AnatomyFigure, onHover } = {}) {
    this.root = root;
    this.renderer = new renderer(root.querySelector("[data-anatomy-mount]"), selection, { onHover });
  }

  /** Shows a program's muscles without selecting them; null to stop. */
  preview(ids) { this.renderer.preview(ids); }
}
