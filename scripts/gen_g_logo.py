import math

PRIMARY = "hsl(152, 55%, 36%)"
PRIMARY_DARK = "hsl(152, 55%, 30%)"
PAPER = "#FAFAF8"

def pt(cx, cy, r, deg):
    rad = math.radians(deg)
    return (cx + r * math.cos(rad), cy - r * math.sin(rad))

def ring_path(cx, cy, r_out, r_in, gap_start, gap_end):
    """A thick 'C'-shaped ring: full annulus minus a wedge between
    gap_start and gap_end (degrees, standard math convention)."""
    o1 = pt(cx, cy, r_out, gap_end)
    o2 = pt(cx, cy, r_out, gap_start)
    i2 = pt(cx, cy, r_in, gap_start)
    i1 = pt(cx, cy, r_in, gap_end)
    large_arc_outer = 1 if (gap_start - gap_end) % 360 > 180 else 0
    large_arc_inner = large_arc_outer
    return (
        f"M {o1[0]:.2f} {o1[1]:.2f} "
        f"A {r_out} {r_out} 0 {large_arc_outer} 0 {o2[0]:.2f} {o2[1]:.2f} "
        f"L {i2[0]:.2f} {i2[1]:.2f} "
        f"A {r_in} {r_in} 0 {large_arc_inner} 1 {i1[0]:.2f} {i1[1]:.2f} Z"
    )

# G ring: a NARROW opening at the right, mostly plugged by a bold bar
# that reaches well past center — this is what makes the shape read as
# "G" instantly, independent of the arrow. Only a small notch above the
# bar stays open, just large enough for a compact arrow accent to sit
# in without ever crossing the ring or the bar.
#
# The gap's two edges (GAP_A = lower-right, GAP_B = upper-right) are
# pulled further apart than the strict minimum needed for the bar --
# lower edge moved down, upper edge moved up -- purely to open up
# taller, more generous negative space above and below the bar (most
# visibly around the arrow). R_OUT/R_IN/CX/CY are untouched, so the
# ring's main circular curve (its "top edge") doesn't move at all.
CX, CY = 100, 100
R_OUT, R_IN = 64, 36
GAP_A, GAP_B = -20, 30
ring = ring_path(CX, CY, R_OUT, R_IN, GAP_A, GAP_B)

# Bar: bold, reaches from well past the center out to the outer edge.
# Centered symmetrically (rather than crowding the top inner curve) and
# a touch shorter, so the negative space above and below it — and the
# gap into the ring's inner curve — reads as consistent breathing room
# rather than a pinch point.
BAR_TOP = CY - 9
BAR_BOTTOM = CY + 9
BAR_LEFT = CX - 14     # reaches well past the middle of the letter
BAR_RIGHT = CX + R_OUT # flush with the outer ring edge
bar = (
    f"M {BAR_LEFT:.2f} {BAR_TOP:.2f} "
    f"L {BAR_RIGHT:.2f} {BAR_TOP:.2f} "
    f"L {BAR_RIGHT:.2f} {BAR_BOTTOM:.2f} "
    f"L {BAR_LEFT:.2f} {BAR_BOTTOM:.2f} Z"
)

# Arrow tail is anchored exactly at the bar's outer top-right corner
# (64, 9) -- a single point of contact with the letterform, not floating
# free in the notch and not buried inside the bar's fill -- so the arrow
# reads as growing out of the G's stroke rather than a sticker placed on
# top of it. From there it climbs at a steeper angle than earlier
# iterations specifically so it diverges away from the ring's outer
# curve faster, opening up clear negative space above the shaft.
def diagonal_arrow(shaft_w, head_w, head_len, tail=(64, 9), tip=(92.45, 50.1)):
    tx, ty = tail
    # direction from tail to tip, in our screen-space (y up positive here,
    # we'll flip at the end since svg y grows down)
    dx, dy = tip[0] - tx, tip[1] - ty
    length = math.hypot(dx, dy)
    ux, uy = dx / length, dy / length          # unit vector along the shaft
    px, py = -uy, ux                            # perpendicular unit vector
    hx, hy = tip[0] - ux * head_len, tip[1] - uy * head_len  # base of head

    def offset(x, y, ox, oy, w):
        return (x + ox * w, y + oy * w)

    s1 = offset(tx, ty, px, py, shaft_w / 2)
    s2 = offset(hx, hy, px, py, shaft_w / 2)
    s3 = offset(hx, hy, px, py, -shaft_w / 2)
    s4 = offset(tx, ty, px, py, -shaft_w / 2)
    h1 = offset(hx, hy, px, py, head_w / 2)
    h2 = tip
    h3 = offset(hx, hy, px, py, -head_w / 2)

    pts = [s1, s2, h1, h2, h3, s3, s4]
    # convert from math-y-up space to svg (cx,cy) screen space: our pt()
    # helper already flips sign for y, so replicate that convention here.
    def to_svg(p):
        return (CX + p[0], CY - p[1])
    pts_svg = [to_svg(p) for p in pts]
    d = "M " + " L ".join(f"{x:.2f} {y:.2f}" for x, y in pts_svg) + " Z"
    return d

arrow_green = diagonal_arrow(shaft_w=13.5, head_w=25, head_len=17)
arrow_white = diagonal_arrow(shaft_w=13.5 + 7, head_w=25 + 9, head_len=17 + 5)

SVG_DEFS = f"""
<linearGradient id="gGrad" x1="0%" y1="100%" x2="100%" y2="0%">
  <stop offset="0%" stop-color="{PRIMARY}"/>
  <stop offset="100%" stop-color="{PRIMARY_DARK}"/>
</linearGradient>
"""

def render_mark(extra_arrow_class=""):
    return f"""
    <path class="g-ring" d="{ring}" fill="url(#gGrad)"/>
    <path class="g-bar" d="{bar}" fill="url(#gGrad)"/>
    <path class="arrow-halo" d="{arrow_white}" fill="{PAPER}"/>
    <path class="arrow-green {extra_arrow_class}" d="{arrow_green}" fill="url(#gGrad)"/>
    """

if __name__ == "__main__":
    print("ring:", ring[:80])
    print("arrow ok")
