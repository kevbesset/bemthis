export default function bem(block, element = null, modifiers = null) {
  const classList = [];

  if (!block) return "";

  let classElement = block;

  if (element) {
    classElement = `${block}__${element}`;
  }

  classList.push(classElement);

  if (modifiers) {
    if (typeof modifiers === "string") {
      modifiers.split(" ").forEach((mod) => {
        classList.push(`${classElement}--${mod}`);
      });
    } else if (Array.isArray(modifiers)) {
      modifiers.forEach((mod) => {
        mod.split(" ").forEach((m) => {
          classList.push(`${classElement}--${m}`);
        });
      });
    } else if (typeof modifiers === "object") {
      Object.entries(modifiers).forEach(([key, value]) => {
        if (value) {
          key.split(" ").forEach((mod) => {
            classList.push(`${classElement}--${mod}`);
          });
        }
      });
    } else {
      throw "Invalid type for modifiers";
    }
  }

  return classList.join(" ");
}

export function b(block, modifiers = null) {
  return bem(block, null, modifiers);
}

export function e(block, element, modifiers = null) {
  return bem(block, element, modifiers);
}
