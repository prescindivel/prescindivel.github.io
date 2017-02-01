# Replaces multiple newlines and whitespace
# between them with one newline

class StripTag < Liquid::Block

  def render(context)
    super.gsub /\n\s*\n/, "\n"
  end

end

Liquid::Template.register_tag('strip', StripTag)
